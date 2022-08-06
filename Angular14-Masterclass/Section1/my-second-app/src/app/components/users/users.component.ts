import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';
import { canComponentDeactivate } from '../../guards/confirmation/confirmation.guard'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements canComponentDeactivate, OnInit {


  users: IUser[] = [];
  

  constructor(private userService: UserService) {}

  ngOnInit() {
    //this.users = this.UserService.getUsers();

    this.userService.getUsersViaREST().subscribe(
         users => this.users = users
    )

    //this.activatedRoute.data.forEach(data => this.users = data['users']);
  }
 
  confirm() {
    return confirm('Are you sure you want to navigate away?')
  }

}
