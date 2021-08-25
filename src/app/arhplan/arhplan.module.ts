import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArhplanRoutingModule } from './arhplan.routing';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { StartPageComponent } from './home-page/components/start-page/start-page.component';
import { ServicesComponent } from './home-page/components/services/services.component';
import { AreaActivityComponent } from './home-page/components/area-activity/area-activity.component';
import { CovidComponent } from './home-page/components/covid/covid.component';
import { UsefulLinksComponent } from './home-page/components/useful-links/useful-links.component';
import { NewsListComponent } from './home-page/components/news-list/news-list.component';
import { MapContactsComponent } from './home-page/components/map-contacts/map-contacts.component';
import { FeedbackComponent } from './home-page/components/feedback/feedback.component';
import { FeedbackFormComponent } from './shared/components/feedback-form/feedback-form.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainLayoutComponent,
    HomePageComponent,
    NavigationComponent,
    FooterComponent,
    StartPageComponent,
    ServicesComponent,
    AreaActivityComponent,
    CovidComponent,
    UsefulLinksComponent,
    NewsListComponent,
    MapContactsComponent,
    FeedbackComponent,
    FeedbackFormComponent
  ],
  imports: [
    CommonModule,
    ArhplanRoutingModule
  ]
})
export class ArhplanModule { }
