import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from '../components/about/about.component';
import { BlogComponent } from '../components/blog/blog.component';
import { HomeComponent } from '../components/home/home.component';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';
import { UsersDetailsComponent } from '../components/users-details/users-details.component';
import { UsersComponent } from '../components/users/users.component';
import { AuthGuard } from '../guards/auth/auth.guard';
import { ConfirmationGuard } from '../guards/confirmation/confirmation.guard';


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent, canActivate: [ AuthGuard ] },
  { path: 'about', component: AboutComponent },
  { path: 'users', 
    component: UsersComponent, 
    canDeactivate: [ ConfirmationGuard ],
    children: [
      { path: ':id', component: UsersDetailsComponent},
      //{ path: '', component: PlaceholderComponent }
  ] },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  providers: [ AuthGuard, ConfirmationGuard ],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
