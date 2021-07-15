import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

declare var $: any;

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {

  constructor(private fb: FormBuilder, private data: DataService, private route: Router) { }

  formGroup!: FormGroup;
  jobUserData: any;
  apiError!: string;

  ngOnInit(): void {

    this.formGroup = this.fb.group({

      jobTitle: ['', [Validators.required]],
      cmpnyName: ['', [Validators.required]],
      cmpnyCity: ['', [Validators.required]],
      cmpnyCuntry: ['', [Validators.required]],
      jobType: ['', [Validators.required]],
      categoryType: ['', [Validators.required]],
      careerLevel: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      jobDesc: ['', [Validators.required]],
      positions: ['', [Validators.required]],

    })

  }
  createJob() {

    console.log(this.formGroup.value)
    this.data.addJob(this.formGroup.value).subscribe((data: any) => {
      this.jobUserData = data;
      console.log(this.jobUserData);
      this.route.navigate(["/dashboard/jobs"]);
    },
      (error) => {
        this.apiError = error.error;
        console.log(this.apiError);
        
      }
    )
  }

}
