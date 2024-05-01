import { Injectable } from '@angular/core';
import { SurveyTemplate } from '../model/SurveyTemplate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  template: SurveyTemplate = {
    surveyTemplateId: 1,
    uuid: 'hello',
    sections: [
      {
        sectionId: 1,
        name: '¿Qué tan temachero eres?',
        questions: [
          {
            questionId: 1,
            statement: '¿Quién es don José?',
            type: 'MULTIPLE_OPTION',
            // @ts-expect-error subclass values
            answerOptions: ['El némesis del Temach', 'El tendero gandalla', 'un amigo'],
            required: true,
          },
          { questionId: 2, statement: '¿Qué es el modo reina?', type: 'OPEN', required: true },
          {
            questionId: 3,
            statement: '¿Cómo se llama el gato negro del Temach que a veces aparece en los lives?',
            type: 'MULTIPLE_OPTION',
            // @ts-expect-error  subclass values
            answerOptions: ['Roberta', 'Tokio', 'Micifuz'],
            required: true,
          },
          {
            questionId: 4,
            statement: '¿Qué fecha es el cumpleaños de Temach?',
            required: true,
            type: 'DATE',
          },
          {
            questionId: 5,
            statement: 'Nombre de la técnica secreta relacionada con una mascota del Temach',
            type: 'OPEN',
            required: true,
          },
          {
            questionId: 6,
            statement: 'Escribe la plegaria San Carlos 16',
            type: 'OPEN',
            required: true,
          },
          { questionId: 7, statement: 'Escribe el pasaje Temach 25', type: 'OPEN', required: true },
        ],
      },
    ],
  };

  retrieveTemplateByUuid(uuid: string | null): Observable<SurveyTemplate> {
    return new Observable((subscriber) => {
      subscriber.next(this.template);
    });
  }
}
