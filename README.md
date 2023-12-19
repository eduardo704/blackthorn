# Eduardo Vargas - Blackthorn project

This project was generated using  [NX](https://nx.dev/)
For this project there were two questions:

The First question was about setting a property in an Angular component called UserProfileComponent, from my experience the best way was to do it on init but there were instructions to replace Todos with code, so following that I did in a simple way getting into from a service:

```
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
```