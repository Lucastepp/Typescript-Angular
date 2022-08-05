import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { canComponentDeactivate } from '../../guards/confirmation/confirmation.guard'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements canComponentDeactivate, OnInit {


  users: Array<IUser> = []

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    //this.users = this.UserService.getUsers();

    this.activatedRoute.data.forEach(data => this.users = data['users']);
  }
 
  confirm() {
    return confirm('Are you sure you want to navigate away?')
  }

}
