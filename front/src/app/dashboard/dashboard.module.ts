import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import{ItemsComponent} from './items/items.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { StoreComponent } from './store/store.component';
import { StoreService } from './store/store.service';
import { DashboardComponent } from './dashboard.component';
@NgModule({
  imports: [ThemeModule, DashboardRoutingModule],
  declarations: [DashboardComponent,ItemsComponent, StoreComponent],
  entryComponents: [],
  providers: [StoreService]
})
export class DashboardModule {}
