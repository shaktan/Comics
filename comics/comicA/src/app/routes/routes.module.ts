import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { SeasonsComponent } from '../seasons/seasons.component';
import { ComicsComponent } from '../comics/comics.component';
import { LoginComponent } from '../login/login.component';


const routes: Routes = [
  {'path':'', 'redirectTo':'/home', 'pathMatch':'full'},
  {'path':'home', 'component': HomepageComponent},
  {'path':'home/seasons/:seriesid', 'component': SeasonsComponent},
  {'path':'home/comics/:seriesid/:seasonsid', 'component': ComicsComponent},
  { path: '**', component: HomepageComponent }                //wildcard path to handle unmatched url (angular matches the url to the configured route from the top).
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }
export const RoutingComponents = [HomepageComponent, ComicsComponent, LoginComponent];
