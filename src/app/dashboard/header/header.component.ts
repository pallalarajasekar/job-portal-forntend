import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }
  
  token!: any; 
  fullName: any;
  roleActive: any;

  ngOnInit(): void {

    this.fullName =  localStorage.getItem("name");

    if(localStorage.getItem("role") == null){
      console.log("role not there");
      this.roleActive = "";

    }else{
      if(localStorage.getItem("role") == "Recruiter"){
        this.roleActive = localStorage.getItem("role");
      }else if(localStorage.getItem("role") == "Job seeker"){
        this.roleActive = localStorage.getItem("role");
      }
      
    }

    //token
    if(localStorage.getItem("responseToken") == null){
      this.token = "";

    }else{
      this.token = localStorage.getItem("responseToken");
    }
    
    console.log(this.token);
    this.clickEvent();

  }

  logout() {
    console.log("logout function");
    localStorage.removeItem("responseToken");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    this.route.navigate(["/login"]);
  }
  profile(){

  }

  status: boolean = false;
  clickEvent() {
    this.status1 = false;
    this.status2 = false;
    console.log(this.status);
    this.status = !this.status;
  }

  status1: boolean = false;
  clickEvent1() {
    this.status = false;
    this.status2 = false;
    console.log(this.status);
    this.status1 = !this.status1;
  }

  status2: boolean = false;
  clickEvent2() {
    this.status1 = false;
    this.status = false;
    console.log(this.status);
    this.status2 = !this.status2;
  }
}
