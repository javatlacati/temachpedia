import { Component, OnInit } from '@angular/core';
import { SurveyTemplate } from '../model/SurveyTemplate';
import { MultipleOptionQuestion } from '../model/MultipleOptionQuestion';
import { Question } from '../model/Question';
import { AnswerData } from '../model/AnswerData';
import { Answer } from '../model/Answer';
import { NgForm } from '@angular/forms';
import { Survey } from '../model/Survey';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-examenmach',
  templateUrl: './examenmach.component.html',
  styleUrls: ['./examenmach.component.scss'],
})
export class ExamenmachComponent implements OnInit {
  item: SurveyTemplate | null = null;
  expandedSectionIndex = 0;
  userResponses: any[][] = [[], []];
  private srcResult: ArrayBuffer | null = null;

  constructor(private readonly surveyService: SurveyService) {}

  ngOnInit() {
    // const routeParams = this.route.snapshot.paramMap;
    // const uuid = routeParams.get("uuid")
    const uuid = 'hello';
    // if (uuid) {
    this.surveyService.retrieveTemplateByUuid(uuid).subscribe((data: SurveyTemplate) => {
      // this.item = data.template.template;
      this.item = data;
      //       if (this.item) {
      //         let numberSections = this.item.sections.length
      //         this.userResponses = []
      //         for (let i = 0; i < numberSections; i++) {
      //           this.userResponses.push([])
      //         }
      //       }
    });
    // }
  }

  getOptions(question: Question): string[] {
    // console.log(`type: ${question.type}`)
    if (question.type === 'MULTIPLE_OPTION') {
      return (question as MultipleOptionQuestion).answerOptions;
    } else {
      return [];
    }
  }

  guardarEncuesta(forma: NgForm) {
    console.log(this.userResponses);
    if (this.item !== null) {
      const survey = new Survey();
      survey.templateId = this.item.surveyTemplateId;
      survey.answers = [];

      for (let sectionIdx = 0; sectionIdx < this.item.sections.length; sectionIdx++) {
        const section = this.item.sections[sectionIdx];
        for (let questionIdx = 0; questionIdx < section.questions.length; questionIdx++) {
          const question = section.questions[questionIdx];
          if (question instanceof MultipleOptionQuestion) {
            console.log(`#${section.sectionId}_${question.questionId}`);
            const moq = question;
            for (let optionIdx = 0; optionIdx < moq.answerOptions.length; optionIdx++) {
              const multipleOptionAnswer = new Answer();
              multipleOptionAnswer.questionId = question.questionId;
              multipleOptionAnswer.questionType = moq.type;
              multipleOptionAnswer.answerData = new AnswerData();
              multipleOptionAnswer.answerData.answerIdx = moq.answerOptions.findIndex(
                (value) => value === this.userResponses[sectionIdx][questionIdx],
              );
              survey.answers.push(multipleOptionAnswer);
              // console.log(`selector "#${section.sectionId}_${question.questionId}_${optionIdx}"`)
            }
          } else {
            if (question.type === 'DATE') {
              const dateQuestion = new Answer();
              dateQuestion.questionType = question.type;
              dateQuestion.questionId = question.questionId;
              dateQuestion.answerData = new AnswerData();
              dateQuestion.answerData.theDate = new Date(
                this.userResponses[sectionIdx][questionIdx],
              ).toLocaleDateString('es-MX', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              });
              survey.answers.push(dateQuestion);
            } else if (question.type === 'OPEN') {
              // OPEN
              const openQuestionAnswer = new Answer();
              openQuestionAnswer.questionType = question.type;
              openQuestionAnswer.questionId = question.questionId;
              openQuestionAnswer.answerData = new AnswerData();
              openQuestionAnswer.answerData.answer = this.userResponses[sectionIdx][questionIdx];
              survey.answers.push(openQuestionAnswer);
            } else if (question.type === 'PICTURE') {
              // PICTURE
              const openQuestionAnswer = new Answer();
              openQuestionAnswer.questionType = question.type;
              openQuestionAnswer.questionId = question.questionId;
              openQuestionAnswer.answerData = new AnswerData();
              openQuestionAnswer.answerData.answer = this.userResponses[sectionIdx][questionIdx];
              survey.answers.push(openQuestionAnswer);
            } else {
              const moq = question as MultipleOptionQuestion;
              const multipleOptionAnswer = new Answer();
              multipleOptionAnswer.questionId = question.questionId;
              multipleOptionAnswer.questionType = moq.type;
              multipleOptionAnswer.answerData = new AnswerData();
              multipleOptionAnswer.answerData.answerIdx = moq.answerOptions.findIndex(
                (value) => value === this.userResponses[sectionIdx][questionIdx],
              );
              survey.answers.push(multipleOptionAnswer);
              // console.log(`selector "#${section.sectionId}_${question.questionId}_${optionIdx}"`)
            }
          }
        }
      }
      console.log(`sending answers: ${JSON.stringify(survey)}`);
      // this.surveyService.saveSurvey({survey})
      //   .subscribe(({data}) => {
      //     // @ts-ignore
      //     console.log(`saved:${JSON.stringify(data)}`)
      //   }, (err) => console.error(err))
    }
  }

  selectFiles(sectionIndex: number, questionIndex: number) {
    const inputNode: any = document.querySelector(`#file_${sectionIndex}_${questionIndex}`);

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
        console.log(this.srcResult);
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
      const file = inputNode.files[0];
      const nByte = file.size;
      console.log(`File ${file.name} is ${nByte} bytes in size`);
      const nameElementId = `fileName_${sectionIndex}_${questionIndex}`;
      console.log(`nameElementId:${nameElementId}`);
      // @ts-expect-error html
      document.getElementById(nameElementId).innerHTML = file.name;
      const sOutput = this.castToByteRepresentation(nByte);
      const fileSizeElementId = `fileSize_${sectionIndex}_${questionIndex}`;
      console.log(`fileSizeElementId:${fileSizeElementId}`);
      // @ts-expect-error html
      document.getElementById(fileSizeElementId).innerHTML = sOutput;
      console.log('sectionIdx:' + sectionIndex);
      console.log('questionIdx:' + questionIndex);
    }
  }

  private castToByteRepresentation(nByte: number) {
    let sOutput = nByte + ' bytes';
    // code for multiples approximation
    const aMultiples = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB'];
    let nMultiple = 0;
    let nApprox = nByte / 1024;
    for (; nApprox > 1; nApprox /= 1024, nMultiple++) {
      sOutput = nApprox.toFixed(3) + ' ' + aMultiples[nMultiple] + ' (' + nByte + ' bytes)';
    }
    return sOutput;
  }
}
