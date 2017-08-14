import { AppPage } from '../../models/app-page';
import { AppPages } from '../../app.pages';
import { Component, ViewChild } from '@angular/core';
import { Nav, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  pages = AppPages;
  constructor(public navCtrl: NavController) {}

  opePage(page: AppPage) {
    this.nav.push(page.component);
  }
}
