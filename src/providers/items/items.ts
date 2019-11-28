import { Injectable } from '@angular/core';

import { Meal } from '../../models/meal';
import { Api } from '../api/api';

@Injectable()
export class Items {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/items', params);
  }

  add(item: Meal) {
  }

  delete(item: Meal) {
  }

}
