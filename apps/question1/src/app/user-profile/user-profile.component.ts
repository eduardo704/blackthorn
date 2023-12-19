import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { take } from 'rxjs';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {
  userName: string;

  constructor(private userProfileService: UserProfileService) {
    this.userName = this.userProfileService.getUsername();
  }
  ngOnInit(): void {
    console.log(this.userName)
    // this.userProfileService.userName$
    //   .pipe(take(1))
    //   .subscribe((userName) => (this.userName = userName));
  }
}
