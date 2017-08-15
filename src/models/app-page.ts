import { Pages } from './pages.enum';

export interface AppPage {
  page: Pages;
  icon: string;
  title: string;
  subtitle: string;
  component: any;
}
