import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ContasPage } from '../pages/contas/contas';


@Component({
  template: `
  <ion-menu [content]="rootIonNav">
    <ion-content>
      <ion-list>
      <ion-list-header>
        Menu
      </ion-list-header>
        <button menuClose ion-item *ngFor="let menuSection of menuSections" (click)="navToComponent(menuSection.component)">
          {{menuSection.title}}
          <ion-icon name="arrow-forward" item-right></ion-icon>
        </button>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-nav #rootIonNav [root]="rootPage"></ion-nav>`
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  menuSections:Array<{title:string,component:any}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.menuSections = [
        {title : 'Home', component : HomePage},
        {title : 'Contas', component : ContasPage}
      ]
    });
  }

  navToComponent(component:any){
    this.nav.setRoot(component);
  }
}
