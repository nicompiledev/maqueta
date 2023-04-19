import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarouselComponent,
    HomeComponent,
    NavbarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzCarouselModule,
    NzMenuModule,
    NzGridModule,
    NzIconModule.forRoot([])
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
