import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactsPageComponent} from './components/contacts-page/contacts-page.component';
import {PhonesComponent} from './components/phones/phones.component';

const routes: Routes = [
  {path: '', component: ContactsPageComponent},
  {path: 'phones', component: PhonesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRouting {
}
