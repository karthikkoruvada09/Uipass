import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor(private hc:HttpClient) { }

  set(k){
    console.log((k))
  }

}
