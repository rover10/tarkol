import { Component, ElementRef, Input, ViewChild,  } from '@angular/core';
import {InteractionService} from './../services/component-interaction/interaction.service';
import {Subscription} from 'rxjs/Subscription';
import { Http,RequestOptions, Headers } from '@angular/http';
import {EventSourcePolyfill} from 'ng-event-source';

import {Observable} from 'rxjs/Rx';


// https://golb.hplar.ch/p/Server-Sent-Events-with-Spring

@Component({
  selector: 'file-viewer',
  templateUrl: './fileViewer.component.html',
  styleUrls: ['./fileViewer.component.css']
})
export class FileViewer {
  closeResult: string;
  data:any;
  show:boolean = true;
  subscription:Subscription;
  uploadStatus:String = "";
  successMsg:String = "";
  errorMsg:String = "";
  updates:String = "";
  
  

  constructor(private updateService: InteractionService, private http: Http) {
    this.subscription = updateService.fileViewer$.subscribe(
    show => {
        console.log(show);
        this.show = show;
        //this.uploadStatus = ""; 
        //this.successMsg ="";
        //this.errorMsg ="";
    });

    this.data = {
        file:'file'
    };

    /*
    // make the call
    this.http.get('/proxy/bucket/files')
    // initial transform - result to json
    .map( (responseData) => {
      return responseData.json();
    })
    // next transform - each element in the 
    // array to a Task class instance
    .map((files: Array<any>) => {
       
        if (files) {
        files.forEach((file) => {
            this.allFile.push(file);
        });
      }
    })

    */
    this.http.get('api/bucket/files')
    .toPromise()
    .then(response => {
        console.log(response.json());
        this.allFiles = response.json();
        
    })

    // subscribe to output from this observable and bind
    // the output to the component when received
   // .subscribe( res => this.tasks = res);
}

closeFileViewer(){
    this.show = true;
}

@Input() multiple: boolean = false;
@ViewChild('file') inputEl: ElementRef;

  apiEndPoint:String = 'api/files';
  formData:FormData;
  options:RequestOptions;
  fileData: String[] = new Array(4); // It would be an array with Rich meta data  and actual file content in another array in future
  allFiles: String[] = new Array(1);
  activeFile: String = 'Untitled';
  loading:boolean = true;
  fileChange(event) {
    let fileList: FileList = event.target.files;
    this.errorMsg ="";
    this.successMsg ="";
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


readFile(fileName){
    console.log("UPLOADING FILE..");
    
    this.http.get('api/read/?fileName=draft&user=rakesh')
    .toPromise()
    .then(response => {
        console.log(response.json());
        this.fileData = response.json();
        
    })
    

    console.log("Read request sent");


    
}


getStream(file){
    /*
    this.http.get('api/read/?fileName=draft&user=rakesh')
    .toPromise()
    .then(response => {
        console.log(response.json());
        this.fileData = response.json();
        
    })
    */
    this.loading = false;
    this.activeFile = file;
    let uri = "api/bucket/stream/file?filename="+file;
    let eventSource:EventSourcePolyfill = new EventSourcePolyfill(uri, {headers: {Accept:'*/*', headerName: 'HeaderValue', header2: 'HeaderValue2' }});
    //let eventSource:EventSourcePolyfill = new EventSourcePolyfill('api/stream/file/?fileName=Draft.txt&user=rakesh', {headers: {Accept:'*/*', headerName: 'HeaderValue', header2: 'HeaderValue2' }});
    this.fileData = [];
    eventSource.onmessage = (data => { 
            console.log(data);
           // this.updates =  data.data;
            this.loading = true;
            this.fileData.push(data.data);
        //    eventSource.close();
     });

    eventSource.onopen = (a) => {
     
    };

    eventSource.onerror = (e) => {
        this.loading = true;
    }

    eventSource.addEventListener('close', function(e){
        eventSource.close(); 
        console.log('Closed the connection')
        this.loading = false;
    });

}


clear(){
    this.fileData.splice(0, this.fileData.length);
    this.activeFile = 'Untitled';   
}

}

