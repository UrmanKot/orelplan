import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArhplanRoutingModule } from './arhplan.routing';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { StartPageComponent } from './home-page/components/start-page/start-page.component';
import { CovidComponent } from './home-page/components/covid/covid.component';
import { UsefulLinksComponent } from './home-page/components/useful-links/useful-links.component';
import { MapContactsComponent } from './home-page/components/map-contacts/map-contacts.component';
import { FeedbackComponent } from './home-page/components/feedback/feedback.component';
import { FeedbackFormComponent } from './shared/components/feedback-form/feedback-form.component';
import {DocumentsModule} from './documents/documents.module';
import { MainLayoutContainerComponent } from './layouts/main-layout-container/main-layout-container.component';
import {ServicesModule} from './services/services.module';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';
import {NewsModule} from "./news/news.module";
import {ActivityModule} from "./activity/activity.module";


@NgModule({
    declarations: [
        HeaderComponent,
        MainLayoutComponent,
        HomePageComponent,
        NavigationComponent,
        FooterComponent,
        StartPageComponent,
        CovidComponent,
        UsefulLinksComponent,
        MapContactsComponent,
        FeedbackComponent,
        FeedbackFormComponent,
        MainLayoutContainerComponent,
        PrivacyPolicyComponent,
    ],
    exports: [
        MapContactsComponent
    ],
  imports: [
    CommonModule,
    ArhplanRoutingModule,
    DocumentsModule,
    ServicesModule,
    NewsModule,
    ActivityModule,
  ]
})
export class ArhplanModule { }
