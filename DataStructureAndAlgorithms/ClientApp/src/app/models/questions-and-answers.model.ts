export interface Approach {
  approachId: number;
  description: string;
  implementation: string;
}
export interface QuestionsAndSolution {
  questionId: any;
  question: string;
  hints: string[];
  solutions: Approach[];
  performanceComparison: string;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  questionsAndSolutions: QuestionsAndSolution[];
}
