import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArhplanRoutingModule } from './arhplan.routing';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainLayoutComponent,
    HomePageComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    ArhplanRoutingModule
  ]
})
export class ArhplanModule { }
