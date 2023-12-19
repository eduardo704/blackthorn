import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UserProfileModule } from './user-profile/user-profile.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, RouterModule, UserProfileModule],
})
export class AppModule {}
