import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AutofocusDirectiveModule } from './autofocus-directive.module';

import { AppComponent } from './app.component';
import { BarveComponent } from './components/barve/barve.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { DolocniCleniComponent } from './components/dolocni-cleni/dolocni-cleni.component';
import { BarvaItemComponent } from './components/barva-item/barva-item.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavodiloComponent } from './components/navodilo/navodilo.component';
import { StevecComponent } from './components/stevec/stevec.component';

import { ScreenService } from './services/screen.service';
import { StartService } from './services/start.service';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    BarveComponent,
    FirstPageComponent,
    DolocniCleniComponent,
    BarvaItemComponent,
    HeaderComponent,
    FooterComponent,
    NavodiloComponent,
    StevecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    AutofocusDirectiveModule
  ],
  providers: [
    StorageService,
    StartService,
    ScreenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
