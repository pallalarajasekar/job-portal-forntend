import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder, private data: DataService, private route: Router) { }

  formGroup!: FormGroup;
  jobUserData: any;
  apiError!: string;
  

  ngOnInit(): void {
    
    this.formGroup = this.fb.group({
      jobTitle: ['', [Validators.required]],
      cmpnyCity: ['', [Validators.required]],
    })

  }
  serachJob(){
    console.log(this.formGroup.value.jobTitle)
    this.route.navigate(["/dashboard/jobsearch", this.formGroup.value.jobTitle, this.formGroup.value.cmpnyCity]);
    console.log(this.formGroup.value);
    
  }

}
