import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Meal } from '../../models/meal';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-meal-of-day',
  templateUrl: 'meal-of-day.html'
})
export class MealOfDayPage {
  currentMeals: Meal[];
  streak = 0;
  today: number = Date.now();
  mealPic = "assets/img/tofu_scramble.jpg";
  mealBlurb = "This is a quick and easy high protein, high nutrient meal that tastes great and will keep you satiated for a long time."
  mealTitle = "Tofu Scramble"
  cards = []

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentMeals = this.items.query();
    console.log(this.currentMeals)

  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    // let card = {
    //   "mealPic": "assets/img/tofu_scramble.jpg",
    //   "mealBlurb": "This is a quick and easy high protein, high nutrient meal that tastes great and will keep you satiated for a long time.",
    //   "mealTitle": "Tofu Scramble",
    //   "meal": "Breakfast"
    // }
    // let card2 = {
    //   mealPic: "assets/img/tofu_scramble.jpg",
    //   mealBlurb: "This is a quick and easy high protein, high nutrient meal that tastes great and will keep you satiated for a long time.",
    //   mealTitle: "Tofu Scramble",
    //   meal: "Lunch"
    // }
    // let card3 = {
    //   mealPic: "assets/img/tofu_scramble.jpg",
    //   mealBlurb: "This is a quick and easy high protein, high nutrient meal that tastes great and will keep you satiated for a long time.",
    //   mealTitle: "Tofu Scramble",
    //   meal: "Dinner"
    // }
    // let cards = [card, card2, card3]
    // this.cards = cards
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Meal) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
