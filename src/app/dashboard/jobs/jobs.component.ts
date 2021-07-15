import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder,FormControl, FormArray } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private fb: FormBuilder, private data: DataService, private route: Router) { }

  formGroup!: FormGroup;
  jobsData: any;
  apiError!: string;
  searchValues: any;

 jobTitleList: any = [
    { id: 1, name: 'Contract' },
    { id: 2, name: 'Part Time' },
    { id: 3, name: 'Full time' },
    { id: 4, name: 'Internship' }
  ];

  categoryTypeList: any = [
    { id: 1, name: 'Accounting Jobs' },
    { id: 2, name: 'IT Jobs' },
    { id: 3, name: 'Networking Jobs' }
  ];

  careerLevelList: any = [
    { id: 1, name: 'Freshers' },
    { id: 2, name: 'Experience' },
    { id: 3, name: 'Freelancer' }
  ];


  ngOnInit(): void {

    this.formGroup = this.fb.group({

      jobType: this.fb.array([], [Validators.required]),
      categoryType: this.fb.array([], [Validators.required]),
      careerLevel: this.fb.array([], [Validators.required]),

    })

    let serchJobData = localStorage.getItem("responseToken");
    console.log(JSON.stringify(serchJobData));
    this.getJobs_data();
  }

  getJobs_data(){
    this.data.getJobs().subscribe((data: any) => {
      this.jobsData = data;
      console.log(this.jobsData);
    },
      (error) => {
        this.apiError = error.error;
        console.log(this.apiError);
        
      }
    )
  }

  onCheckboxChange(e: any) {
    if (e.target.checked) {
      this.searchValues = {
        jobType: e.target.value 
      }
      console.log(this.searchValues);
      this.getserchjobs(this.searchValues);
    } else {
      this.getJobs_data();
    }
  }

  onCheckboxChange1(e: any) {
    if (e.target.checked) {
      this.searchValues = {
        categoryType: e.target.value 
      }
      console.log(this.searchValues);
      this.getserchjobs(this.searchValues)
    } else {
      this.getJobs_data();
    }
  }

  onCheckboxChange2(e: any) {
    if (e.target.checked) {
      this.searchValues = {
        careerLevel: e.target.value 
      }
      console.log(this.searchValues);
      this.getserchjobs(this.searchValues)
    } else {
      this.getJobs_data();
    }
  }

  getserchjobs(getsearchdata: any){
    this.data.jobSearch(getsearchdata).subscribe((data: any) => {
      this.jobsData = data;
      localStorage.setItem("responseToken",this.jobsData);
      console.log(this.jobsData);
    },
      (error) => {
        this.apiError = error.error;
        console.log(this.apiError);
        
      }
    )
  }

  getJobDetail(jobDetail: any){
    //localStorage.setItem("responseToken",jobDetail._id);
    this.route.navigate(["/dashboard/jobDetail", jobDetail._id]);
  }

}

