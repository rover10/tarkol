import { Component, ElementRef, Input, ViewChild,  } from '@angular/core';
import {InteractionService} from './../services/component-interaction/interaction.service';
import {Subscription} from 'rxjs/Subscription';
import { Http,RequestOptions, Headers } from '@angular/http';

import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'upload-modal',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadModal {
  closeResult: string;
  data:any;
  show:boolean = true;
  subscription:Subscription;

  constructor(private updateService: InteractionService, private http: Http) {
    this.subscription = updateService.displayUploadModal$.subscribe(
    show => {
        console.log(show);
        this.show = show;             
    });

    this.data = {
        file:'file'
    };
}

closeUploadModal(){
    this.show = true;
}

@Input() multiple: boolean = false;
@ViewChild('file') inputEl: ElementRef;

  apiEndPoint:String = '/files';
  formData:FormData;
  options:RequestOptions;

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
         this.formData = new FormData();
        this.formData.append('file', file, file.name);
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
       // headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        this.options = new RequestOptions({ headers: headers });
        console.log("File ready for upload");
    }
}



upload(){
    /*
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData:FormData = new FormData();
   // formData['enctype'] ="multipart/form-data";
    if (fileCount > 0) { // a file was selected
       
        for (let i = 0; i < fileCount; i++) {
            formData.append('file', inputEl.files.item(i), inputEl.files.item(i).name  );
            //formData['file'] = inputEl.files.item(i);
           console.log( formData);
        }
        console.log(formData);
        this.http
            .post('files', formData)
            .subscribe(res => alert(res.text),
            error => console.log(error));
            // do whatever you do...
            // subscribe to observable to listen for response
    }
    */
 
    console.log("UPLOADING FILE..");
    this.http.post(`${this.apiEndPoint}`, this.formData, this.options)
    .map(res => res.json())
    .catch(error => Observable.throw(error))
    .subscribe(
        data => console.log('success'),
        error => console.log(error)
    );

    console.log("Sent data!!");

}
}
