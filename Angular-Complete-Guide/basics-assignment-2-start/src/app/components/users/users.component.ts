import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  username:string = '';
  stringIsNotEmpty: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  resetString(): any {
    this.username = '';
  }

  checkString(event: Event): any {
    if(this.username !== ''){
      this.stringIsNotEmpty = true;
    }
  }

}
