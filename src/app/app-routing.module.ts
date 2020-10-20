import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndicartorsListComponent } from './indicartors-list/indicartors-list.component';
import { IndicatorHistoricalComponent } from './indicator-historical/indicator-historical.component';

const routes: Routes = [
  { 
    path: 'indicadores', 
    component: IndicartorsListComponent
  },
  { 
    path: 'indicator-historical/:key',
    component: IndicatorHistoricalComponent
  },
  { 
    path: '**', 
    redirectTo: '/indicadores'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
