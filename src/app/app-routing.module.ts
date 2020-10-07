import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndicartorsListComponent } from './indicartors-list/indicartors-list.component';

const routes: Routes = [
  { path: 'indicadores', component: IndicartorsListComponent},
  { path: '**', redirectTo: '/indicadores'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
