import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class InteractionService {
    // Observable boolean sources
    private newDataSource = new Subject<boolean>();
    private terminal = new Subject<boolean>();
    // Observable boolean streams
    newData$ = this.newDataSource.asObservable();
    terminal$ = this.terminal.asObservable();
    changeData(data: boolean) {
        this.newDataSource.next(data);
    }

    showTerminal(terminal:boolean){
        this.terminal.next(terminal);
    };

}