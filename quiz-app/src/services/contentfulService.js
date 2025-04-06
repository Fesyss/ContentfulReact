import { createClient } from 'contentful';
import { Question } from '../models/Question';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT, 
});

const getQuizData = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'step', 
      include: 2,
    });

    const steps = response.items.map((stepEntry) => {
      const { Title, questions, stepsId } = stepEntry.fields;
      
      const stepQuestions = Array.isArray(questions)
        ? questions.map((questionEntry) => {
            const {
              questionText,
              questionType,
              possibleAnswers,
              answer, 
            } = questionEntry.fields;

            const formattedAnswers = Array.isArray(possibleAnswers)
              ? possibleAnswers
              : (possibleAnswers ? possibleAnswers.split(/\s*,\s*/) : []);

            return new Question(
              questionEntry.sys.id,
              questionText,
              questionType,
              formattedAnswers,
              answer 
            );
          })
        : [];

      return {
        id: stepEntry.sys.id,
        title: Title,
        stepsId,
        questions: stepQuestions,
      };
    });

    return steps; 
  } catch (error) {
    console.error('Error fetching data from Contentful:', error);
    throw error;
  }
};

export default { getQuizData };
