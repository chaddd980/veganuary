import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MealOfDayPage } from './meal-of-day';

@NgModule({
  declarations: [
    MealOfDayPage,
  ],
  imports: [
    IonicPageModule.forChild(MealOfDayPage),
    TranslateModule.forChild()
  ],
  exports: [
    MealOfDayPage
  ]
})
export class MealOfDayPageModule { }
