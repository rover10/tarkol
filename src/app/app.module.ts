import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InteractionService} from './services/component-interaction/interaction.service';
import { AppComponent } from './app.component';
import {TopBarComponent} from './bars/top/topbar.component';
import {LeftMenuBarComponent} from './bars/left/leftMenuBar.component'; 
@NgModule({
  declarations: [
    AppComponent, TopBarComponent, LeftMenuBarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [InteractionService],
  bootstrap: [AppComponent, TopBarComponent,LeftMenuBarComponent,]
})
export class AppModule { }
