import { NgModule } from '@angular/core';
import { ItemsComponent } from './items.component';
import {HttpModule} from '@angular/http';
import { ItemsService } from './items.service';
import { ThemeModule } from '../../@theme/theme.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ItemsRoutingModule } from './items-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  imports: [CommonModule, Ng2SmartTableModule,HttpModule, ItemsRoutingModule,HttpClientModule,ThemeModule],
  declarations: [ItemsComponent],
  providers: [ItemsService]
})
export class ItemsModule {}
