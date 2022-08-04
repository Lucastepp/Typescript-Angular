import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: IUser[] = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com' },
    { id: 2, name: 'Jacob Riglin', email: 'JRiglin@gmail.com' },
    { id: 3, name: 'Tom Jauncey', email: 'Tom23@gmail.com' },
    { id: 4, name: 'Jeremy Jauncey', email: 'Jeremyaa34@gmail.com' },
    { id: 5, name: 'Sam Kodler', email: 'Kodler311@gmail.com' },
    { id: 6, name: 'Jordan Taylor', email: 'Jo-ay@gmail.com' },
    { id: 7, name: 'Peter Smith', email: 'Pet777@gmail.com' },
  ];

  constructor() { }

  getUsers(): IUser[] {
    return this.users;
  }

}
