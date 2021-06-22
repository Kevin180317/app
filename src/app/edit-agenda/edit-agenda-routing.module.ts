import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAgendaPage } from './edit-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: EditAgendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAgendaPageRoutingModule {}
