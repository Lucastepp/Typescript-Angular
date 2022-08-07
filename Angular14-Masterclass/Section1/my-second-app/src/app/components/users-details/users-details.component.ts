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
  posts: any;

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

  createUser() {
    this.userService.createUser(this.user).subscribe(
      user => alert(`A new user was created with the id: ${user.id}`),
      err => alert(`Got an error as: ${err}`),
      () => alert('Creation of user completed!')
    );
  }

  updateUser() {
    this.user.name = 'Sam Kolder';
    this.user.email = 'sam.kolder@example.com';
    this.userService.updateUser(this.user).subscribe(
      user => alert(`A new user was updated with the id: ${user.id}`),
      err => alert(`Got an error as: ${err}`),
      () => alert('Updation of user completed!')
    );

  }

  deleteUser() {
    this.user.name = 'Sam Kolder';
    this.user.email = 'sam.kolder@example.com';
    this.userService.deleteUser(this.user.id).subscribe(
      user => alert(`The User was deleted`),
      err => alert(`Got an error as: ${err}`),
      () => alert('Deletion of user completed!')
    );

  }

  getUserPosts() {
    this.posts = this.userService.getUserPosts(this.user.id);
  }

}
