import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { StatusCreateComponent } from './status/status-create/status-create.component';
import { StatusListComponent } from './status/status-list/status-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    StatusCreateComponent,
    StatusListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [StatusComponent]
})
export class AppModule { }
