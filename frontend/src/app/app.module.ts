import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PlansComponent } from './components/pages/plans/plans.component';
import { MatTableModule } from '@angular/material/table';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CarouselComponent,
    HomeComponent,
    LoginComponent,
    PlansComponent,
    DashboardComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCarouselModule.forRoot(),
    MatTableModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavigationComponent]
})
export class AppModule { }
