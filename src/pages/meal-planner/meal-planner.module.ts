import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MealPlannerPage } from './meal-planner';

@NgModule({
  declarations: [
    MealPlannerPage,
  ],
  imports: [
    IonicPageModule.forChild(MealPlannerPage),
  ],
})
export class MealPlannerPageModule {}
