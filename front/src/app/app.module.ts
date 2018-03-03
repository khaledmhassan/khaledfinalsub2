import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from './@theme/theme.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,HttpClientModule,HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule {}
