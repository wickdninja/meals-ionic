import { MealStore } from '../stores/meal.store';
import { IMealStore } from '../stores/imeal.store';
import { MealPlannerPage } from '../pages/meal-planner/meal-planner';
import { MealPlannerPageModule } from '../pages/meal-planner/meal-planner.module';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { ShoppingListPageModule } from '../pages/shopping-list/shopping-list.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  core: {
    app_id: '03c30ba6'
  }
};

@NgModule({
  declarations: [MyApp, HomePage],
  entryComponents: [MyApp, HomePage, ShoppingListPage, MealPlannerPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    ShoppingListPageModule,
    MealPlannerPageModule
  ],
  bootstrap: [IonicApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: IMealStore, useClass: MealStore }
  ]
})
export class AppModule {}
