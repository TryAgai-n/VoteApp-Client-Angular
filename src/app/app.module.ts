import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {UploadCandidateComponent} from './upload-candidate/upload-candidate.component';
import {CandidatesListComponent} from './candidate-list/candidates-list.component';
import {LogInComponent} from './Authorization/log-in/log-in.component';
import {SignUpComponent} from './Authorization/sign-up/sign-up.component';
import {AboutComponent} from './About/about.component';
import {CandidateListRickAndMorty} from "./candidate-list-rick-and-morty/candidate-list-rick-and-morty";
import {TestBootStrapComponent} from './Authorization/test-boot-strap/test-boot-strap.component';
import {MainNavbarComponent} from './Navbars/main-navbar/main-navbar.component';
import {MainLogoComponent} from './Navbars/main-logo/main-logo.component';
import {CandidateCardComponent } from './candidate-card/candidate-card.component';


const routes: Routes = [
  {path: 'log-in', component: LogInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'about', component: AboutComponent},
  {path: 'upload', component: UploadCandidateComponent},
  {path: 'votes', component: CandidatesListComponent},
  {path: 'candidate/:id', component: CandidateCardComponent },
  {path: 'rick-and-morty-votes', component: CandidateListRickAndMorty},
  {path: 'test-bootstrap', component: TestBootStrapComponent},
  {path: '', redirectTo: '/votes', pathMatch: 'full'},
  {path: '**', redirectTo: '/votes'}
];

@NgModule({
  declarations: [
    AppComponent,
    UploadCandidateComponent,
    CandidatesListComponent,
    CandidateListRickAndMorty,
    LogInComponent,
    SignUpComponent,
    AboutComponent,
    TestBootStrapComponent,
    MainNavbarComponent,
    MainLogoComponent,
    CandidateCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,

    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
