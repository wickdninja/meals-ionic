import { ShoppingListPage } from './pages/shopping-list/shopping-list';
import { MealPlannerPage } from './pages/meal-planner/meal-planner';
import { HomePage } from './pages/home/home';

export const AppPages: Array<{ title: string; component: any }> = [
  { title: 'Home', component: HomePage },
  { title: 'Meal Planner', component: MealPlannerPage },
  { title: 'Shopping List', component: ShoppingListPage }
];
