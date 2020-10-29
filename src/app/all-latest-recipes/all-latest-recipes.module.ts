import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllLatestRecipesPageRoutingModule } from './all-latest-recipes-routing.module';

import { AllLatestRecipesPage } from './all-latest-recipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllLatestRecipesPageRoutingModule
  ],
  declarations: [AllLatestRecipesPage]
})
export class AllLatestRecipesPageModule {}
