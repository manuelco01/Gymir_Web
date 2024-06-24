import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { RegisterComponent } from './shared/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { UnsplashService } from './servicios/unsplash.service';
import { GalleryGymComponent } from './shared/gallery-gym/gallery-gym.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HeaderfinalComponent } from './shared/headerfinal/headerfinal.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    GalleryGymComponent,
    HeaderfinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UnsplashService, 
    provideClientHydration(),
    provideHttpClient(withFetch()) 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
