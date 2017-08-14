import { Meal } from '../models/meal';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IMealStore {
  data: Observable<Meal[]>;
  init() {
    return null;
  }
}
