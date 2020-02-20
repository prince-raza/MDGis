import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateSpecialistPage } from './update-specialist.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateSpecialistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateSpecialistPageRoutingModule {}
