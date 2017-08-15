import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import {InteractionService} from './services/component-interaction/interaction.service';
import { AppComponent } from './app.component';
import {TopBarComponent} from './bars/top/topbar.component';
import {LeftMenuBarComponent} from './bars/left/leftMenuBar.component'; 

import {DropdownButtonComponent} from './menu/drop-down/dropdown.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{Terminal} from './terminal/terminal.component';
import { AngularDraggableModule } from 'angular2-draggable';
import {ResizableModule} from 'angular2-resizable';


@NgModule({
  declarations: [
    AppComponent, TopBarComponent, LeftMenuBarComponent,DropdownButtonComponent,Terminal
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), AngularDraggableModule,ResizableModule,
  ],
  providers: [InteractionService],
  bootstrap: [AppComponent, TopBarComponent,LeftMenuBarComponent,DropdownButtonComponent,Terminal ]
})
export class AppModule { }
