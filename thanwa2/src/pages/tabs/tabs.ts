import { Component } from '@angular/core';


import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { IstfoodPage } from '../istfood/istfood';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
 
  tab3Root = ContactPage;
  tab4Root = IstfoodPage;

  constructor() {

  }
}
