import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _rootUrl: string = 'https://jsonplaceholder.typicode.com/users';
  private _rootPostsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  private _users: IUser[] = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com' },
    { id: 2, name: 'Jacob Riglin', email: 'JRiglin@gmail.com' },
    { id: 3, name: 'Tom Jauncey', email: 'Tom23@gmail.com' },
    { id: 4, name: 'Jeremy Jauncey', email: 'Jeremyaa34@gmail.com' },
    { id: 5, name: 'Sam Kodler', email: 'Kodler311@gmail.com' },
    { id: 6, name: 'Jordan Taylor', email: 'Jo-ay@gmail.com' },
    { id: 7, name: 'Peter Smith', email: 'Pet777@gmail.com' },
  ];

  constructor(private http: HttpClient) {}

  getUsers(): IUser[] {
    return this._users;
  }

  addUser(user: IUser) {
    this._users.push(user);
  }

  getUsersViaREST(): Observable<IUser[]> {
    let headers = new HttpHeaders().set('Authorization', 'Bearer your-access-token-here')
    return this.http.get<IUser[]>(this._rootUrl, { headers: headers })
      .pipe(map(users => {
        return users.map(user => {
          return {
            id: user.id,
            name: user.name,
            email: user.email
          }
        })
      }))
  }

  getUsersById(id: number): IUser {
    return this._users.filter(user => user.id === id)[0];
  }

  getUserByIdViaREST(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this._rootUrl}/${id}`)
  }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this._rootUrl, user);
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this._rootUrl}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this._rootUrl}/${id}`);
  }

  getUserPosts(id: number): Observable<any> {
    let params = new HttpParams().set('userId', id.toString());
    return this.http.get(this._rootPostsUrl, { params })
  }

}
