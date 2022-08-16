import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  dateToday!: string;
  users!: IUser[];
  filterIdType: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.dateToday = new Date().toDateString();
    this.users = this.userService.getUsers();
  }

  addUser() {
    this.userService.addUser({
      id: this.users.length + 1,
      name: 'Jacob Riglin',
      email: 'jac@gmail.com'
    })
  }

}
