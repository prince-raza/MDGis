import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteServicePage } from './delete-service.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteServicePageRoutingModule {}
