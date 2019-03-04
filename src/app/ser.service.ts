import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor(private hc:HttpClient) { }

  set(k){
    console.log((k))
  }

  getgoogle()
  {
     console.log("dkkdka")
   return this.hc.get('/auth/login');
   
  }

}
