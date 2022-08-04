import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  user: any;

  users: Array<IUser> = [];

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    this.users = this.userService.getUsers();

    this.activatedRoute.params.subscribe((params) => {
      this.user = this.users.filter((user) => user.id === +params['id'])[0];
    })

    this.activatedRoute.queryParams.subscribe((qs) => console.log('Got the QS as: ', qs))
  }

}
