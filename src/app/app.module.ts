import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { AddServerBlueprintComponent } from './add-server-blueprint/add-server-blueprint.component';
import { ServerListItemComponent } from './server-list-item/server-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    AddServerBlueprintComponent,
    ServerListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
