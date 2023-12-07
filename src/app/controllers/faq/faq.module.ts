import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FaqComponent} from './faq/faq.component';
import {RouterModule} from "@angular/router";
import {CardModule} from "primeng/card";


@NgModule({
    declarations: [
        FaqComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: FaqComponent},
        ]),
        CardModule,
    ]
})
export class FaqModule {
}
