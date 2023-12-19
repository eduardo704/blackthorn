import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserProfileModule } from './user-profile/user-profile.module';

@Component({
  imports: [RouterModule, UserProfileModule],
  selector: 'blackthorn-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
