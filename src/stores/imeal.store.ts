import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Meal } from '../models/meal';

@Injectable()
export class IMealStore {
  meals: Observable<Meal[]>;
  init() {
    return null;
  }
}
