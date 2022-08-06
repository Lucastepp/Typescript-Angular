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

  user!: IUser;

  users: Array<IUser> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
    
        this.userService.getUserByIdViaREST(+params['id']).subscribe(
          user => this.user = user,
          err => console.log('Got an error while fetching the user details', err),
          () => alert('Fetch of User Details Completed') 
        )
      })
    
  }

}
