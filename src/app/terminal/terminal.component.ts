import { Component } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {InteractionService} from './../services/component-interaction/interaction.service';
import { AngularDraggableModule } from 'angular2-draggable';
import {ResizeEvent} from 'angular2-resizable';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';
 
  import {
    Input
  } from '@angular/core'; 

@Component({
 selector: 'terminal',
 templateUrl: './terminal.component.html',
 styleUrls: ['./terminal.component.css'],   
 animations: [
    trigger('heroState', [
      state('inactive', style({transform: 'translateX(0) scale(1)'})),
      state('active',   style({transform: 'translateX(0) scale(1.1)'})),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => inactive', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate(100)
      ]),
      transition('inactive => void', [
        animate(100, style({transform: 'translateX(100%) scale(1)'}))
      ]),
      transition('void => active', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(200)
      ]),
      transition('active => void', [
        animate(200, style({transform: 'translateX(0) scale(0)'}))
      ])
    ])
  ]
})

export class Terminal {
    subscription:Subscription;
    show:boolean= false;
    state:String= 'inactive';

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
    
    toggle(){
        if(this.state === 'active')
            this.state = 'inactive';
        else
            this.state = 'active';
    }  
}