import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: object; 

  constructor(private router: Router) {
    let valid = sessionStorage.getItem("validUser");
    if (valid != "true"){
      this.router.navigateByUrl("/login");
    }
    this.user = JSON.parse(sessionStorage.getItem("user"));
  }

  ngOnInit() {
  }

  toLogin(){
    this.router.navigateByUrl('/login');
  }
}
