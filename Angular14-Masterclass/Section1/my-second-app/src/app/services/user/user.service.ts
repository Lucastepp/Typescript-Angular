import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _rootUrl: string = 'https://jsonplaceholder.typicode.com/users'

  private _users: IUser[] = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com' },
    { id: 2, name: 'Jacob Riglin', email: 'JRiglin@gmail.com' },
    { id: 3, name: 'Tom Jauncey', email: 'Tom23@gmail.com' },
    { id: 4, name: 'Jeremy Jauncey', email: 'Jeremyaa34@gmail.com' },
    { id: 5, name: 'Sam Kodler', email: 'Kodler311@gmail.com' },
    { id: 6, name: 'Jordan Taylor', email: 'Jo-ay@gmail.com' },
    { id: 7, name: 'Peter Smith', email: 'Pet777@gmail.com' },
  ];

  constructor(private http: HttpClient) { }

  getUsers(): IUser[] {
    return this._users;
  }

  getUsersViaREST(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._rootUrl)
  }

  getUsersById(id: number): IUser {
    return this._users.filter(user => user.id === id)[0];
  }

  getUserByIdViaREST(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this._rootUrl}/${id}`)
  }

}
