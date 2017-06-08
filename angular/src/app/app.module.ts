import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoutingComponents } from './routes/routes.module';
import { RoutesModule } from './routes/routes.module';
import { HeaderComponent } from './header/header.component';
import { Configuration } from "./config";
import { SeasonsComponent } from './seasons/seasons.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';




@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule
  ],
  providers: [Configuration,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
