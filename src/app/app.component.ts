import { Component } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Subject} from 'rxjs/Subject';

import {LeftMenuBarComponent} from './bars/left/leftMenuBar.component';

import {InteractionService} from './services/component-interaction/interaction.service';
import { UploadModal } from './modals/upload.component';
import {FileViewer} from './panels/fileViewer.component';

import { GraphChart } from './graphs/chart/barchart.component';
import { Stocks } from './shared/data/data'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show: boolean = false;
  subscription: Subscription;

  constructor(private updateService: InteractionService) {
      this.subscription = updateService.newData$.subscribe(
          show => {
              console.log(show);
              this.show = show;             
      });
  }
  
  title = 'app';
}
