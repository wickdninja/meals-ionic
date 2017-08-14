import { IMealStore } from './imeal.store';
import { Meal } from '../models/meal';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

const DELAY = 500;

@Injectable()
export class AppPagesService implements IMealStore {
  private _data = new BehaviorSubject<Meal[]>(null);
  public data = this._data.asObservable();

  constructor() {
    setTimeout(() => this.init(), DELAY);
  }

  init() {
    this._data.next(null);
  }
}
