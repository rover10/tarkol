import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import {InteractionService} from './services/component-interaction/interaction.service';
import { AppComponent } from './app.component';
import {TopBarComponent} from './bars/top/topbar.component';
import {LeftMenuBarComponent} from './bars/left/leftMenuBar.component'; 
import {DropdownButtonComponent} from './menu/drop-down/dropdown.component';
import {NgbdPopoverTriggers } from './menu/user/user.popover.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent, TopBarComponent, LeftMenuBarComponent,DropdownButtonComponent,NgbdPopoverTriggers 
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), 
  ],
  providers: [InteractionService],
  bootstrap: [AppComponent, TopBarComponent,LeftMenuBarComponent,DropdownButtonComponent,NgbdPopoverTriggers ]
})
export class AppModule { }
