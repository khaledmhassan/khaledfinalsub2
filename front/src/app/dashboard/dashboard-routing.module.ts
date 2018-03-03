import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { DashboardComponent } from './dashboard.component';
import { StoreComponent } from './store/store.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
   
  children:[{
    path:'items',
    component:ItemsComponent
  },
  {
    path:'store',
    component:StoreComponent
  },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
