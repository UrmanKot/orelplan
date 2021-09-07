import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArhplanRoutingModule } from './arhplan.routing';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { StartPageComponent } from './home-page/components/start-page/start-page.component';
import { AreaActivityComponent } from './home-page/components/area-activity/area-activity.component';
import { CovidComponent } from './home-page/components/covid/covid.component';
import { UsefulLinksComponent } from './home-page/components/useful-links/useful-links.component';
import { NewsListComponent } from './home-page/components/news-list/news-list.component';
import { MapContactsComponent } from './home-page/components/map-contacts/map-contacts.component';
import { FeedbackComponent } from './home-page/components/feedback/feedback.component';
import { FeedbackFormComponent } from './shared/components/feedback-form/feedback-form.component';
import {DocumentsModule} from './documents/documents.module';
import { MainLayoutContainerComponent } from './layouts/main-layout-container/main-layout-container.component';
import {ServicesModule} from './services/services.module';


@NgModule({
    declarations: [
        HeaderComponent,
        MainLayoutComponent,
        HomePageComponent,
        NavigationComponent,
        FooterComponent,
        StartPageComponent,
        AreaActivityComponent,
        CovidComponent,
        UsefulLinksComponent,
        NewsListComponent,
        MapContactsComponent,
        FeedbackComponent,
        FeedbackFormComponent,
        MainLayoutContainerComponent,
    ],
    exports: [
        MapContactsComponent
    ],
    imports: [
        CommonModule,
        ArhplanRoutingModule,
        DocumentsModule,
        ServicesModule,
    ]
})
export class ArhplanModule { }
