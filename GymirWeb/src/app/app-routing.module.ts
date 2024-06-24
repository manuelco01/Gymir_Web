import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { RegisterComponent } from './shared/register/register.component';
import { GalleryGymComponent } from './shared/gallery-gym/gallery-gym.component';
import { HeaderfinalComponent } from './shared/headerfinal/headerfinal.component';

const routes: Routes = [{path:'',redirectTo: 'home',  pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'Register',component:RegisterComponent},
  {path:'galery',component:GalleryGymComponent},
  {path:'header',component:HeaderfinalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
