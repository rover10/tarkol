import { Component } from '@angular/core';
import {DropdownButtonComponent} from './../../menu/drop-down/dropdown.component';
import {InteractionService} from './../../services/component-interaction/interaction.service';
import { HttpModule }    from '@angular/http';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'top-bar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})

export class TopBarComponent {
  
    toggle_main_pane :boolean = false; 
    constructor(private updateService: InteractionService, private http: Http) {}
    changeOutside() {
      this.toggle_main_pane =!this.toggle_main_pane;
      this.updateService.changeData(this.toggle_main_pane);
    }
    title = 'app';

    newProject(){
      console.log('Sending get request');
      this.http.get(`topics/1`)
      .toPromise()
      .then(response => {console.log(response.json()); alert(response.json())})
      .catch(this.handleError);

   }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
}
