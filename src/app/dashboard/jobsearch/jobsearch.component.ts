import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html',
  styleUrls: ['./jobsearch.component.css']
})
export class JobsearchComponent implements OnInit {
  constructor(private fb: FormBuilder, private data: DataService, private route: Router, private activeRoute: ActivatedRoute) { }

  formGroup!: FormGroup;
  jobsData: any;
  apiError!: string;
  searchValues: any;

  ngOnInit(): void {

    this.formGroup = this.fb.group({

      jobType: [false, Validators.requiredTrue],
      categoryType: [false, Validators.requiredTrue],
      careerLevel: [false, Validators.requiredTrue],
      experience: [false, Validators.requiredTrue],
  

    })

     let searchdata = {
      jobTitle: this.activeRoute.snapshot.params.jobTitle,
      cmpnyCity: this.activeRoute.snapshot.params.location,

     }
     console.log(searchdata);
    this.data.perfectJob_data(searchdata).subscribe((data: any) => {
      this.jobsData = data;
      console.log(this.jobsData)
    },
      (error) => {
        this.apiError = error.error;
        console.log(this.apiError);
        
      }
    )

  }

  onCheckboxChange(e: any) {
    if (e.target.checked) {
      console.log(e.target.value);
      this.searchValues = {
        jobType: e.target.value 
      }
      console.log(this.searchValues);
      this.getserchjobs(this.searchValues)
    } else {
       
    }
  }

  onCheckboxChange1(e: any) {
    if (e.target.checked) {
      console.log(e.target.value);
      this.searchValues = {
        categoryType: e.target.value 
      }
      console.log(this.searchValues);
      this.getserchjobs(this.searchValues)
    } else {
       console.log("enter values");
    }
  }

  onCheckboxChange2(e: any) {
    if (e.target.checked) {
      console.log(e.target.value);
      this.searchValues = {
        careerLevel: e.target.value 
      }
      console.log(this.searchValues);
      this.getserchjobs(this.searchValues)
    } else {
       
    }
  }

  getserchjobs(getsearchdata: any){
    this.data.jobSearch(getsearchdata).subscribe((data: any) => {
      this.jobsData = data;
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