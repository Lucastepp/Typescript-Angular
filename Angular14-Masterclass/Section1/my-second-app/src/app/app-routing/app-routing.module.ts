import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from '../components/about/about.component';
import { BlogComponent } from '../components/blog/blog.component';
import { BuiltInAttrDirComponent } from '../components/built-in-attr-dir/built-in-attr-dir.component';
import { BuiltInStrDirComponent } from '../components/built-in-str-dir/built-in-str-dir.component';
import { DirectiveHostComponent } from '../components/directive-host/directive-host.component';
import { HomeComponent } from '../components/home/home.component';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';
import { UsersDetailsComponent } from '../components/users-details/users-details.component';
import { UsersComponent } from '../components/users/users.component';
import { AuthGuard } from '../guards/auth/auth.guard';
import { ConfirmationGuard } from '../guards/confirmation/confirmation.guard';
import { UsersResolveGuard } from '../guards/UsersResolve/users-resolve.guard';
import { UserService } from '../services/user/user.service';


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent, canActivate: [ AuthGuard ] },
  { path: 'about', component: AboutComponent },
  { path: 'str-dir', component: BuiltInStrDirComponent },
  { path: 'attr-dir', component: BuiltInAttrDirComponent },
  { path: 'directives', component: DirectiveHostComponent },
  { 
    path: 'users', 
    component: UsersComponent, 
    canDeactivate: [ ConfirmationGuard ],
    resolve: {
      users: UsersResolveGuard
    },
    children: [
      { path: ':id', component: UsersDetailsComponent},
      //{ path: '', component: PlaceholderComponent }
  ] },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  providers: [ AuthGuard, ConfirmationGuard, UserService, UsersResolveGuard ],
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
