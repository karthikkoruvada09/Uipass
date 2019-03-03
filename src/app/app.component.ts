import { Component } from '@angular/core';
import {SerService} from "./ser.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private  ser: SerService){}



}
