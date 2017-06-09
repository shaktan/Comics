import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { SeasonsComponent } from '../seasons/seasons.component';
import { ComicsComponent } from '../comics/comics.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { SuperadminComponent } from '../superadmin/superadmin.component';
import { AuthService } from '../auth.service';


const routes: Routes = [
  {'path':'', 'redirectTo':'/home', 'pathMatch':'full'},
  {'path':'home', 'component': HomepageComponent},
  {'path':'home/:id', 'component': HomepageComponent},
  {'path':'login', 'component': LoginComponent},
  {'path':'superadmin', 'component': SuperadminComponent,
    data: [
      { role: 'superadmin'}
    ],
    canActivate: [AuthService]
  },
  {'path':'register', 'component': RegisterComponent},
  {'path':'home/seasons/:seriesid', 'component': SeasonsComponent},
  {'path':'home/comics/:seriesid/:seasonid', 'component': ComicsComponent},
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
export const RoutingComponents = [HomepageComponent, SeasonsComponent, ComicsComponent, LoginComponent, RegisterComponent, SuperadminComponent];
