import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateSpecialistPageRoutingModule } from './update-specialist-routing.module';

import { UpdateSpecialistPage } from './update-specialist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateSpecialistPageRoutingModule
  ],
  declarations: [UpdateSpecialistPage]
})
export class UpdateSpecialistPageModule {}
