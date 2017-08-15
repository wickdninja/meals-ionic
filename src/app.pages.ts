import { Pages } from './models/pages.enum';
import { AppPage } from './models/app-page';
import { ShoppingListPage } from './pages/shopping-list/shopping-list';
import { MealPlannerPage } from './pages/meal-planner/meal-planner';
import { HomePage } from './pages/home/home';

export const AppPages: Array<AppPage> = [
  {
    page: Pages.Home,
    component: HomePage,
    icon: 'home',
    title: 'Home',
    subtitle: 'Home'
  },
  {
    page: Pages.MealPlanner,
    component: MealPlannerPage,
    icon: 'calendar',
    title: 'Meal Planner',
    subtitle: `Schedule meals over a selected time period.
      Ingedients will be synced to your shopping list.`
  },
  {
    page: Pages.ShoppingList,
    component: ShoppingListPage,
    icon: 'cart',
    title: 'Shopping List',
    subtitle: `A shopping list of all of the meals currently in your planner`
  }
];
