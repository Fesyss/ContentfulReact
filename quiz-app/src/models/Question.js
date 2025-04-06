export class Question {
  constructor(id, text, type, possibleAnswers = [], answer = '') {
    this.id = id;                     // Unique identifier for the question
    this.text = text;                 // The question text
    this.type = type;                 // e.g., "multipleChoice", "openEnded", etc.
    this.possibleAnswers = possibleAnswers; // Array of possible answers
    this.answer = answer;             // Correct answer
  }
}
