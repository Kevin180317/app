import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Local1PageRoutingModule } from './local1-routing.module';

import { Local1Page } from './local1.page';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Local1PageRoutingModule
  ],
  declarations: [Local1Page]
})
export class Local1PageModule {}
