import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpContext: HttpClient) { }

  logSomeData(data:string): Observable<Object> {
    return this.httpContext.get("http://localhost:3000/workers");
  }
}
