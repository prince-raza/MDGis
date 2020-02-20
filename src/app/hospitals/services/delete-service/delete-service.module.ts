import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteServicePageRoutingModule } from './delete-service-routing.module';

import { DeleteServicePage } from './delete-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteServicePageRoutingModule
  ],
  declarations: [DeleteServicePage]
})
export class DeleteServicePageModule {}
