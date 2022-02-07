import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';

import { LoginComponent } from './pages/login/login.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { FriendComponent } from './friend/friend.component';
import { LogoutComponent } from 'src/logout/logout.component';
import { AcceptPagetComponent } from './accept-page/accept-paget.component';
import { StudentTableComponent } from './student-table/student-table.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "contact", component:ContactComponent},
  {path: "register", component:RegisterComponent},
  {path:  "login", component:LoginComponent},
  {path:"Student",component:StudentPageComponent},
  {path:"StudentProfile",component:StudentProfileComponent},
  {path:"Friend",component:FriendComponent},
  {path:"logout",component:LogoutComponent},
 {path:"StudentTable",component:StudentTableComponent},

  
  {path:"accept",component:AcceptPagetComponent},
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
