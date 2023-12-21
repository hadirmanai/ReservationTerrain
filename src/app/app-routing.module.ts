import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationTerrainComponent } from './reservation-terrain/reservation-terrain.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [ {path:'Home', component:HomeComponent},
{path:'', component:ReservationTerrainComponent},
{path:'Login', component:LoginComponent},
{path:'Register', component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
