import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MainPageComponent } from './core/components/main-page/main-page.component';
import { HeaderModule } from './core/components/headers/headers.module';
import { AboutComponent } from './core/components/about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainPageComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
