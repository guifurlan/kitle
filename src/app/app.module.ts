import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EducacaoPage } from '../pages/educacao/educacao';
import { QuitacaoPage } from '../pages/quitacao/quitacao';
import { BadgesPage } from '../pages/badges/badges';
import {AboutPage} from '../pages/about/about';
import { IonTextAvatar } from 'ionic-text-avatar';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EducacaoPage,
    QuitacaoPage,
    BadgesPage,
    IonTextAvatar,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EducacaoPage,
    QuitacaoPage,
    BadgesPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
