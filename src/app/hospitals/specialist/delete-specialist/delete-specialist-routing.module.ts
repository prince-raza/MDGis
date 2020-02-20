import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteSpecialistPage } from './delete-specialist.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteSpecialistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteSpecialistPageRoutingModule {}
