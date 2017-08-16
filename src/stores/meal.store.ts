import { MockMealData } from '../models/mock-meal-data';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

import { Meal } from '../models/meal';
import { IMealStore } from './imeal.store';

const DELAY = 500;

@Injectable()
export class MealStore implements IMealStore {
  private _meals = new BehaviorSubject<Meal[]>(null);
  public meals = this._meals.asObservable();

  constructor() {
    setTimeout(() => this.init(), DELAY);
  }

  init() {
    this._meals.next(MockMealData);
  }
}
