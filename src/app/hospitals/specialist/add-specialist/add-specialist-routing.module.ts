import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSpecialistPage } from './add-specialist.page';

const routes: Routes = [
  {
    path: '',
    component: AddSpecialistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSpecialistPageRoutingModule {}
