import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AuthInterceptor} from './shared/auth.interceptor';
import {FormsModule} from '@angular/forms';

const INTERSEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyA9biG_XjgBErs-TLHf_njDSrGXoC7dnAA',
      authDomain: 'orelarhplan.firebaseapp.com',
      databaseURL: 'https://orelarhplan-default-rtdb.firebaseio.com',
      projectId: 'orelarhplan',
      storageBucket: 'orelarhplan.appspot.com',
      messagingSenderId: '141041363538',
      appId: '1:141041363538:web:16ce2d168c8da7286a0d8b'
    }),
    AngularFireStorageModule,
    FormsModule,
  ],
  providers: [INTERSEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule {
}
