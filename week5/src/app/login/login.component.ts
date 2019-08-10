import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private httpClient: HttpClient){}
  
  private username: string;
  private password: string;
  private showError: Boolean = false;

  private login(){
    
    let user = {username: this.username, password: this.password};
    // send post request with user credentials to api/login
    this.httpClient.post<string>("http://localhost:3000/api/login", user)
      .subscribe(res => {
        let obj = JSON.parse(res);
        if (obj.valid){
          sessionStorage.setItem("validUser", "true")
          sessionStorage.setItem("user", res);
          this.router.navigateByUrl("/account");
        } else {
          this.showError = true;
        }
      })
  }
}
