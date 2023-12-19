import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  userName=new BehaviorSubject('Edu');
  userName$=this.userName.asObservable();

  constructor() { }

  getUsername(){
    return 'Eduardo'
  }




}
