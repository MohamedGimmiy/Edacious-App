import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllLatestRecipesPage } from './all-latest-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: AllLatestRecipesPage,
    children: [
      {
        path: 'recipe-details',
        children: [
          {
            path: '',
            loadChildren: () => import('../recipe-details/recipe-details.module').then(m => m.RecipeDetailsPageModule)
          },
          {
            path: ':RecipeId',
            loadChildren: () => import('../recipe-details/recipe-details.module').then(m => m.RecipeDetailsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/all-latest-recipes/recipe-details',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/all-latest-recipes/recipe-details',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllLatestRecipesPageRoutingModule {

}
