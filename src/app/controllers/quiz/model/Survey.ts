import { Answer } from './Answer';

export class Survey {
  surveyId: number | null = null;
  templateId: number | null = null;
  answers: Answer[] = [];
}
