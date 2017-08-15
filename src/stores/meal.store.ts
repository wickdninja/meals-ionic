import { MockMealData } from '../models/mock-meal-data';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

import { Meal } from '../models/meal';
import { IMealStore } from './imeal.store';

const DELAY = 500;

@Injectable()
export class MealStore implements IMealStore {
  private _data = new BehaviorSubject<Meal[]>(null);
  public data = this._data.asObservable();

  constructor() {
    setTimeout(() => this.init(), DELAY);
  }

  init() {
    this._data.next(MockMealData);
  }
}
