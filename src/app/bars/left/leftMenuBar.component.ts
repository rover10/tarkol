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
    toggle_main_pane :boolean = false;
    terminal :boolean = true; 
    subscription:Subscription;
    show:boolean= false;

    constructor(private updateService: InteractionService) {
      this.subscription = updateService.newData$.subscribe(
        show => {
            console.log(show);
            this.show = show;             
        });

        this.subscription = updateService.terminal$.subscribe(
          terminal => {
              console.log(terminal);
              this.terminal = terminal;             
          });
 
    }

   changeOutside() {
      this.toggle_main_pane =!this.toggle_main_pane;
      this.updateService.changeData(this.toggle_main_pane);
    }

    showTerminal() {
      this.updateService.showTerminal(false);
    }

    toggle() {
      this.show =!this.show;
    }

    uploadData(){
      this.updateService.showUploadModal(false);
    }  
    title = 'app';

    openFileViewer(){
      this.updateService.showfileViewer(false);
    }
}
