import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {AuthComponent} from "./auth/auth.component";


@NgModule({

  imports: [RouterModule.forRoot([{path :'',component : HomeComponent},
    {path :'login',component :LoginComponent,children:[{path :'home',redirectTo:'/',pathMatch:"full"},
        {path:'auth',redirectTo : '/authhome',pathMatch:"full"}]},
    {path :'signup',component : SignupComponent},{path :'authhome',component: AuthComponent}
    ], { useHash: true })

  ],
  exports : [RouterModule]
})
export class RouteModule { }
