import { Observable } from 'rxjs/Rx';
import { Meal } from '../../models/meal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IMealStore } from '../../stores/imeal.store';

/**
 * Generated class for the MealPlannerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meal-planner',
  templateUrl: 'meal-planner.html'
})
export class MealPlannerPage {
  $meals: Observable<Meal[]>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private store: IMealStore
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealPlannerPage');
  }
}
