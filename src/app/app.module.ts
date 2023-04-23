import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from "./components/tree.component";
import { FolderIconComponent } from "./icons/folder-icon.component";
import { FileIconComponent } from "./icons/file-icon.component";
import { NavigationComponent } from "./components/navigation.component";
import { OpenedFilesComponent } from "./components/opened-files.component";
import {MenuComponent} from "./components/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    FolderIconComponent,
    FileIconComponent,
    NavigationComponent,
    OpenedFilesComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
