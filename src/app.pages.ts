import { AppPage } from './models/app-page';
import { ShoppingListPage } from './pages/shopping-list/shopping-list';
import { MealPlannerPage } from './pages/meal-planner/meal-planner';
import { HomePage } from './pages/home/home';

export const AppPages: Array<AppPage> = [
  { icon: 'home', title: 'Home', component: HomePage },
  { icon: 'event', title: 'Meal Planner', component: MealPlannerPage },
  { icon: 'cart', title: 'Shopping List', component: ShoppingListPage }
];
