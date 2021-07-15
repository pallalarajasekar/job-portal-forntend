import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  constructor(private fb: FormBuilder, private data: DataService, private route: Router, private activeRoute: ActivatedRoute) { }

  currentid: any;
  jobDetailData: any;
  apiError!: string;

  ngOnInit(): void {

    this.currentid = this.activeRoute.snapshot.params.id;
    
    let selectData = {
      _id: this.currentid
    }
    console.log(selectData);
    this.data.jobSearch(selectData).subscribe((data: any) => {
      this.jobDetailData = data;
      console.log(this.jobDetailData);
    },
      (error) => {
        this.apiError = error.error;
        console.log(this.apiError);
        
      }
    )
    
  }

  logout(){
    
  }

}
