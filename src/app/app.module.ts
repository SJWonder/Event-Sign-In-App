import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { UsersComponent } from './users/users.component';
import { UserSignupComponent } from './users/user-signup/user-signup.component';
import { UserRosterComponent } from './users/user-roster/user-roster.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, UserSignupComponent, UserRosterComponent, AdminLoginComponent, UserSignInComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
