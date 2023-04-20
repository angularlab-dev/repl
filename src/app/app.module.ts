import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from "./tree.component";
import { FolderIconComponent } from "./icons/folder-icon.component";
import { FileIconComponent } from "./icons/file-icon.component";

@NgModule({
  declarations: [
    AppComponent, TreeComponent, FolderIconComponent, FileIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
