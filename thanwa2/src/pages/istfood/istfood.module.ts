import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IstfoodPage } from './istfood';

@NgModule({
  declarations: [
    IstfoodPage,
  ],
  imports: [
    IonicPageModule.forChild(IstfoodPage),
  ],
})
export class IstfoodPageModule {}
