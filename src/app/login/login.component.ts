import { Component, OnInit } from '@angular/core';
import {SerService} from "../ser.service";
import{ Router}from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rou : SerService,private nav:Router ) {

  }

  ngOnInit() {
  }

  method(k){
    console.log(k);
    this.rou.set(k);
  }

  met(){
    this.rou.getgoogle();
    this.nav.navigate(['/login/auth']);
  }

}
