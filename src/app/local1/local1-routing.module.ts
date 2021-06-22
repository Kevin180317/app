import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Local1Page } from './local1.page';

const routes: Routes = [
  {
    path: '',
    component: Local1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Local1PageRoutingModule {}
