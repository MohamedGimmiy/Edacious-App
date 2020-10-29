import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindUsPageRoutingModule } from './find-us-routing.module';

import { FindUsPage } from './find-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindUsPageRoutingModule
  ],
  declarations: [FindUsPage]
})
export class FindUsPageModule {}
