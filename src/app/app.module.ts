import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InteractionService} from './services/component-interaction/interaction.service';
import { AppComponent } from './app.component';
import {TopBarComponent} from './bars/top/topbar.component';
@NgModule({
  declarations: [
    AppComponent, TopBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [InteractionService],
  bootstrap: [AppComponent, TopBarComponent]
})
export class AppModule { }
