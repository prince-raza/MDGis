import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialistPage } from './specialist.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialistPage
  },
  {
    path: 'add-specialist',
    loadChildren: () => import('./add-specialist/add-specialist.module').then( m => m.AddSpecialistPageModule)
  },
  {
    path: 'update-specialist',
    loadChildren: () => import('./update-specialist/update-specialist.module').then( m => m.UpdateSpecialistPageModule)
  },
  {
    path: 'delete-specialist',
    loadChildren: () => import('./delete-specialist/delete-specialist.module').then( m => m.DeleteSpecialistPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialistPageRoutingModule {}
