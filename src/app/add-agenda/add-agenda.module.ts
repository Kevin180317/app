import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAgendaPageRoutingModule } from './add-agenda-routing.module';

import { AddAgendaPage } from './add-agenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAgendaPageRoutingModule
  ],
  declarations: [AddAgendaPage]
})
export class AddAgendaPageModule {}
