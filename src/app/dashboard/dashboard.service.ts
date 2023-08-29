import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  Users = [
    {
      id: 1,
      name: 'Surendhar',
      email: 'Surendharofficial51@gamil.com',
      mobile: 9943662031,
      role: 'Admin'
    },
    {
      id: 2,
      name: 'Suresh',
      email: 'Suresh@gamil.com',
      mobile: 9943662032,
      role: 'Admin'
    },
    {
      id: 3,
      name: 'Shawn',
      email: 'Shawn@gamil.com',
      mobile: 9943662033,
      role: 'User'
    },
    {
      id: 4,
      name: 'Micheal',
      email: 'Micheal@gamil.com',
      mobile: 9943662034,
      role: 'User'
    },
    {
      id: 5,
      name: 'Jhon',
      email: 'Jhon@gamil.com',
      mobile: 9943662035,
      role: 'User'
    },
  ]

  constructor() { }

  getUserdata() {
    return this.Users
  }

  getUserId(id: number) {
    var user = this.Users.find(x => x.id == id);  
    if (user != null) {
      return user;
    }
  }

  deleteUser(id: number) {
    this.Users = this.Users.filter(x => x.id !== id);
  }
  
}
