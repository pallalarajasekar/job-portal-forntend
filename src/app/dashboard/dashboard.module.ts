import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { dashboardRoutes } from "./dashboard.routing";
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { PostingComponent } from './posting/posting.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';





@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SideBarComponent,
    HomeComponent,
    JobsComponent,
    PostingComponent,
    JobDetailComponent,
    FooterComponent,
    ProfileComponent,
    JobsearchComponent
  ],
  imports: [
    RouterModule.forChild(dashboardRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe]
})
export class DashboardModule { }
