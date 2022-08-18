import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  communicationsModes!: string[];
  genders!: string[];


  constructor() { }

  ngOnInit(): void {
    this.genders = ['Male', 'Female', 'Other'];
    this.communicationsModes = ['Phone', 'Email'];
  }

  submit(userForm: any) {
    console.log(
      'Form Submitted', userForm
    )
  }

}
