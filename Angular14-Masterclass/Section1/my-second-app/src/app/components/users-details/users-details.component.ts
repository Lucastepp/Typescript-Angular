import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  user: any;

  users: Array<{ id: number, name: string, email: string}> = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com'},
    { id: 2, name: 'Jacob Riglin', email: 'JRiglin@gmail.com'},  
    { id: 3, name: 'Tom Jauncey', email: 'Tom23@gmail.com'},
    { id: 4, name: 'Jeremy Jauncey', email: 'Jeremyaa34@gmail.com'},
    { id: 5, name: 'Sam Kodler', email: 'Kodler311@gmail.com'},
    { id: 6, name: 'Jordan Taylor', email: 'Jo-ay@gmail.com'},
    { id: 7, name: 'Peter Smith', email: 'Pet777@gmail.com'},
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.user = this.users.filter((user) => user.id === +params['id'])[0];
    })

    this.activatedRoute.queryParams.subscribe((qs) => console.log('Got the QS as: ', qs))
  }

}
