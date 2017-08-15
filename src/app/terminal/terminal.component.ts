import { Component } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {InteractionService} from './../services/component-interaction/interaction.service';
import { AngularDraggableModule } from 'angular2-draggable';
import {ResizeEvent} from 'angular2-resizable';

@Component({
 selector: 'terminal',
 templateUrl: './terminal.component.html',
 styleUrls: ['./terminal.component.css'],
})

export class Terminal {
    subscription:Subscription;
    show:boolean= false;
    
    constructor(private updateService: InteractionService) {
        this.subscription = updateService.terminal$.subscribe(
        show => {
            console.log(show);
            this.show = !show;             
        });

    }

    hideTerminal(){
        //this.show = !this.show; 
        this.updateService.showTerminal(true);
    }

    onResizeEnd(event: ResizeEvent): void {
        console.log('Element was resized', event);
      }
}