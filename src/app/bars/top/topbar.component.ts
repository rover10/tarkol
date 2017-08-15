import { Component } from '@angular/core';
import {DropdownButtonComponent} from './../../menu/drop-down/dropdown.component';
import {InteractionService} from './../../services/component-interaction/interaction.service';

@Component({
  selector: 'top-bar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})

export class TopBarComponent {
    toggle_main_pane :boolean = false; 
    constructor(private updateService: InteractionService) {}
    changeOutside() {
      this.toggle_main_pane =!this.toggle_main_pane;
      this.updateService.changeData(this.toggle_main_pane);
    }
    title = 'app';
}
