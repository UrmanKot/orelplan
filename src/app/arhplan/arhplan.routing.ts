import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {MainLayoutContainerComponent} from './layouts/main-layout-container/main-layout-container.component';
import {PrivacyPolicyComponent} from './shared/components/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) }
    ],
  },
  {
    path: '', component: MainLayoutContainerComponent, children: [
      {path: 'documents', loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule) },
      {path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
      {path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
      {path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
      {path: 'activity', loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule) },
      {path: 'gisogd', loadChildren: () => import('./gisogd/gisogd.module').then(m => m.GisogdModule) },
      {path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
      {path: 'privacy-policy', component: PrivacyPolicyComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArhplanRoutingModule {
}
