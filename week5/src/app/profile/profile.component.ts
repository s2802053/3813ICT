import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private user: object;
  private username: string;

  constructor(private router: Router) {
      let valid = sessionStorage.getItem("validUser");
      if (valid != "true"){
        this.router.navigateByUrl("/login");
      }

       let user = JSON.parse(sessionStorage.getItem("user"));
       this.username = `${user.username}`;
       this.user = user;
  }

  ngOnInit() {} 

  editProfile(){
    sessionStorage.setItem("user", JSON.stringify(this.user));
  }
}
