import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxsModule, LoggerPluginModule, LocalStoragePluginModule, ReduxDevtoolsPluginModule } from 'ngxs';


import { AppComponent } from './app.component';

import { MyStore } from './mystore';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    NgxsModule.forRoot([MyStore]),
    LoggerPluginModule.forRoot({
        collapsed: false,
        logger: console
    }),
    LocalStoragePluginModule.forRoot({
      // Default, you can pass single string or array of strings
      // that could be deeply nested too
      key: '@@STATE',
      // Custom serializer, defaults to JSON
      serialize: JSON.stringify,
      // Custom deserializer, defaults to JSON
      deserialize: JSON.parse
    }),
    ReduxDevtoolsPluginModule.forRoot({
      disabled: false // Set to true for prod mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
