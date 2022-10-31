import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  userLogin(user:string, passw:string):boolean {
    let res = false;

    if(user=='admin' && passw=='12345'){
      res = true
    }

    return res
  }
}
