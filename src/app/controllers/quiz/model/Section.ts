import { Question } from './Question';

export class Section {
  sectionId: number = 0;
  name: string = '';
  questions: Question[] = [];
}
