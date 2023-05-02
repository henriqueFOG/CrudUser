import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
  ];

  getUsers(): Observable<any[]> {
    return of(this.users);
  }

  getUser(id: number): Observable<any> {
    const user = this.users.find(u => u.id === id);
    return of(user);
  }

  createUser(user: any): Observable<any> {
    user.id = this.users.length + 1;
    this.users.push(user);
    return of(user);
  }

  updateUser(user: any): Observable<any> {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index > -1) {
      this.users[index] = user;
    }
    return of(user);
  }

  deleteUser(id: any): Observable<any> {
    this.users = this.users.filter(u => u.id != id);
    return of({ success: true });
  }
}
