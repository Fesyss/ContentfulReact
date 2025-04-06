export class Step {
  constructor(id, questions = [], questionOrder = []) {
    this.id = id;                    // Unique identifier for the step
    this.questions = questions;      // Array of Question instances for this step
    this.questionOrder = questionOrder; // Array of question IDs defining the display order
  }
}
