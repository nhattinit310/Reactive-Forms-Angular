import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService }         from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
