import { Component, OnInit  } from '@angular/core';
import {Worker} from "./models/worker";
import {SubComponent} from "./sub/sub.component";
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private httpService: HttpService) {}
  


  localWorker: Worker = Worker.initWorker();
  title = 'crud-table';

  ngOnInit() {
    console.log("Component Mounted");
    this.httpService.logSomeData("This is logged from HTTP Service").subscribe(res => {
      console.log(res);
    });
  }

  workers: Array<Worker> = [];

  submitForm() {
    this.workers.push(this.localWorker);
    this.localWorker = Worker.initWorker();
  }

  inputChanged(event:InputEvent) {
  }

  deleteWorkerOnIndex(i:number):void {
    this.workers.splice(i, 1);
  }

}
