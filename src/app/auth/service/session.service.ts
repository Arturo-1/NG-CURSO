import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/users.module';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private user = new BehaviorSubject<User | null>(null)
  public user$ = this.user.asObservable();
  constructor() { 
    
  }
  setUser(user:User): void{
    this.user.next(user);
  }
}
