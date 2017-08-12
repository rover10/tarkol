import { Component } from '@angular/core';
import {InteractionService} from './../../services/component-interaction/interaction.service';

@Component({
  selector: 'top-bar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})

export class TopBarComponent {

    constructor(private updateService: InteractionService) {}
    changeOutside() {
      this.updateService.changeData(true);
    }
    title = 'app';
}
