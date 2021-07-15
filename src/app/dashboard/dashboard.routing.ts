import { NgModule } from '@angular/core';
//import { DashboardModule } from './dashboard.module';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { HomeComponent } from './home/home.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { PostingComponent } from './posting/posting.component';
import { ProfileComponent } from './profile/profile.component';




export const dashboardRoutes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "jobs",
    component: JobsComponent
  },
  {
    path: "profile/:name",
    component: ProfileComponent
  },
  {
    path: "jobsearch/:jobTitle/:location",
    component: JobsearchComponent
  },
  {
    path: "jobDetail/:id",
    canActivate:[AuthGuard],
    component: JobDetailComponent
  },
  {
    path: "posting",
    canActivate:[AuthGuard],
    component: PostingComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardModule { }
