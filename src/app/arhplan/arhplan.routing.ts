import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {MainLayoutContainerComponent} from './layouts/main-layout-container/main-layout-container.component';

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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArhplanRoutingModule {
}
