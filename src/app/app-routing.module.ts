import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { ArtistlistComponent } from './artist/artistlist/artistlist.component';
import { ArtistComponent } from './artist/artist/artist.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'user/login', component: LoginComponent },
  {path:'user/register', component: RegisterComponent },
  {path:'artistsList', component: ArtistlistComponent},
  {path:'artist', component: ArtistComponent},
  {path:'**', component: NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
