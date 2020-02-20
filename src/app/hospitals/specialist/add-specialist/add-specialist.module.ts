import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSpecialistPageRoutingModule } from './add-specialist-routing.module';

import { AddSpecialistPage } from './add-specialist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSpecialistPageRoutingModule
  ],
  declarations: [AddSpecialistPage]
})
export class AddSpecialistPageModule {}
