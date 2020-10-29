import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindUsPage } from './find-us.page';

const routes: Routes = [
  {
    path: '',
    component: FindUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindUsPageRoutingModule {}
