import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { HttpInterceptor } from './http.interceptor';
import { httpFactory } from './http.factory';
import {IonicStorageModule} from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports:
   [
     BrowserModule, 
     IonicModule.forRoot(), 
     AppRoutingModule,
     HttpModule,
     HttpClientModule,
     IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { 
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
      
    },
   {
    provide:HttpInterceptor,
    useFactory:httpFactory,
    deps:[XHRBackend,RequestOptions]
   }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
