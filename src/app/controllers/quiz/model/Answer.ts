import { AnswerData } from './AnswerData';

export class Answer {
  id: number | null = null;
  questionId: number | null = null;
  questionType: string = '';
  answerData: AnswerData | null = null;
}
