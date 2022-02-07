import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './pages/login/login.component';

 
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { FriendComponent } from './friend/friend.component';
import { StudentTableComponent } from './student-table/student-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    StudentPageComponent,
    StudentProfileComponent,
    FriendComponent,
    StudentTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     HttpClientModule,
    ReactiveFormsModule,
   
     
    
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component:LoginComponent},
      {path: 'studentTable',component:StudentTableComponent}


     // {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
    ]),
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
