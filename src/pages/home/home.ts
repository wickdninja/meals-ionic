import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AppPages } from '../../app.pages';
import { AppPage } from '../../models/app-page';
import { Pages } from '../../models/pages.enum';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mealPlannerPage: AppPage;
  shoppingListPage: AppPage;

  constructor(private navCtrl: NavController) {
    AppPages.forEach(page => {
      switch (page.page) {
        case Pages.MealPlanner:
          this.mealPlannerPage = page;
          break;
        case Pages.ShoppingList:
          this.shoppingListPage = page;
          break;
        default:
          return;
      }
    });
  }

  gotoMealPlanner() {
    this.navCtrl.setRoot(this.mealPlannerPage.component);
  }
  gotoShoppingList() {
    this.navCtrl.setRoot(this.shoppingListPage.component);
  }
}
