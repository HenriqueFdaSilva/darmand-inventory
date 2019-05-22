import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductProvider } from '../providers/product/product';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DecimalHousePipe } from '../pipes/decimal-house/decimal-house';
import { AngularFirestoreModule } from 'angularfire2/firestore';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DecimalHousePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDpd-_NHtxYOLD7RmdAHjRsy3xAsc2eei8",
      authDomain: "darmand-inventory.firebaseapp.com",
      databaseURL: "https://darmand-inventory.firebaseio.com",
      projectId: "darmand-inventory",
      storageBucket: "darmand-inventory.appspot.com",
      messagingSenderId: "159710406378"
    }),
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductProvider
  ]
})
export class AppModule {}
