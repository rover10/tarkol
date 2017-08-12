import { Component } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Subject} from 'rxjs/Subject';
import {InteractionService} from './../../services/component-interaction/interaction.service';

@Component({
  selector: 'left-menu-bar',
  templateUrl: './leftMenuBar.component.html',
  styleUrls: ['./leftMenuBar.component.css']
})

export class LeftMenuBarComponent {
    toggle_main_pane :boolean = true; 
    subscription:Subscription;
    show:boolean= false;

    constructor(private updateService: InteractionService) {
      this.subscription = updateService.newData$.subscribe(
        show => {
            console.log(show);
            this.show = show;             
        });
    }

    toggle() {
      this.show =!this.show;
    }

    title = 'app';
}
