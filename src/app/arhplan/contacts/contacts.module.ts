import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRouting } from './contacts.routing';
import { PhonesComponent } from './components/phones/phones.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ArhplanModule} from '../arhplan.module';


@NgModule({
  declarations: [
    PhonesComponent,
    ContactsPageComponent
  ],
    imports: [
        CommonModule,
        ContactsRouting,
        MatExpansionModule,
        ArhplanModule
    ]
})
export class ContactsModule { }
