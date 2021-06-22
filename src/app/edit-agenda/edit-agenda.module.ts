import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAgendaPageRoutingModule } from './edit-agenda-routing.module';

import { EditAgendaPage } from './edit-agenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAgendaPageRoutingModule
  ],
  declarations: [EditAgendaPage]
})
export class EditAgendaPageModule {}
