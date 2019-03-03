import { Component, OnInit } from '@angular/core';
import {SerService} from "../ser.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rou : SerService ) {

  }

  ngOnInit() {
  }

  method(k){
    console.log(k);
    this.rou.set(k);
  }

}
