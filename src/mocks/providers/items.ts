import { Injectable } from '@angular/core';

import { Meal } from '../../models/meal';

@Injectable()
export class Items {
  meals: Meal[] = [];

  defaultItem: any = {
    "mealPic": "assets/img/tofu_scramble.jpg",
    "mealBlurb": "This is a quick and easy high protein, high nutrient meal that tastes great and will keep you satiated for a long time.",
    "mealTitle": "Tofu Scramble",
    "meal": "Breakfast",
  };


  constructor() {
    let meals = [
      {
        "mealPic": "assets/img/tofu_scramble.jpg",
        "mealBlurb": "This is a quick and easy high protein, high nutrient meal that tastes great and will keep you satiated for a long time.",
        "mealTitle": "Tofu Scramble",
        "meal": "Breakfast",
      },
      {
        "mealPic": "assets/img/tofu_scramble.jpg",
        "mealBlurb": "This is a quick and easy high protein, high nutrient meal that tastes great and will keep you satiated for a long time.",
        "mealTitle": "Tofu Scramble",
        "meal": "Lunch",
      },
      {
        "mealPic": "assets/img/tofu_scramble.jpg",
        "mealBlurb": "This is a quick and easy high protein, high nutrient meal that tastes great and will keep you satiated for a long time.",
        "mealTitle": "Tofu Scramble",
        "meal": "Dinner",
      }
    ];

    for (let meal of meals) {
      this.meals.push(new Meal(meal));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.meals;
    }

    return this.meals.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Meal) {
    this.meals.push(item);
  }

  delete(item: Meal) {
    this.meals.splice(this.meals.indexOf(item), 1);
  }
}
