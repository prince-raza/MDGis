import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteSpecialistPageRoutingModule } from './delete-specialist-routing.module';

import { DeleteSpecialistPage } from './delete-specialist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteSpecialistPageRoutingModule
  ],
  declarations: [DeleteSpecialistPage]
})
export class DeleteSpecialistPageModule {}
