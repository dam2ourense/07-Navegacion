import { TabsPage } from './../pages/tabs/tabs';
import { ModalPage } from './../pages/modal/modal';
import { Ajustes2Page } from './../pages/ajustes2/ajustes2';
import { AjustesPage } from './../pages/ajustes/ajustes';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PrincipalPage } from '../pages/principal/principal';
import { Principal2Page } from '../pages/principal2/principal2';
import { Pagina3Page } from '../pages/pagina3/pagina3';

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    Principal2Page,
    Pagina3Page,    
    AjustesPage,
    Ajustes2Page,
    ModalPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    Principal2Page,
    Pagina3Page,    
    AjustesPage,
    Ajustes2Page,
    ModalPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
