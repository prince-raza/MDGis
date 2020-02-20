import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalsPage } from './hospitals.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalsPage
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'specialist',
    loadChildren: () => import('./specialist/specialist.module').then( m => m.SpecialistPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalsPageRoutingModule {}
