import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRouting} from './admin.routing';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './services/auth.guard';
import {AlertService} from './services/alert.service';
import {SharedModule} from '../shared/shared.module';
import { AlertComponent } from './shared/components/alert/alert.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    AdminRouting,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard, AlertService]
})
export class AdminModule {
}
