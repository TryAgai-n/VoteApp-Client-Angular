import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadCandidateComponent } from './upload-candidate/upload-candidate.component';
import { MainCandidateComponent } from './main-candidate/main-candidate.component';
import { CandidatesListComponent } from './main-candidate/candidate-list/candidates-list.component';
import { LogInComponent } from './Authorization/log-in/log-in.component';
import { SignUpComponent } from './Authorization/sign-up/sign-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from "@angular/router";
import { AboutComponent } from './About/about.component';
import {CandidateListRickAndMorty} from "./candidate-list-rick-and-morty/candidate-list-rick-and-morty";
import { TestBootStrapComponent } from './Authorization/test-boot-strap/test-boot-strap.component';
import {FormsModule} from "@angular/forms";
import { MainNavbarComponent } from './Navbars/main-navbar/main-navbar.component';
import { MainLogoComponent } from './Navbars/main-logo/main-logo.component';


const routes: Routes = [
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'about', component: AboutComponent },
  { path: 'upload', component: UploadCandidateComponent},
  { path: 'votes', component: MainCandidateComponent },
  { path: 'rick-and-morty-votes', component: CandidateListRickAndMorty },
  { path: 'test-bootstrap', component: TestBootStrapComponent },
  { path: '', redirectTo: '/votes', pathMatch: 'full' },
  { path: '**', redirectTo: '/votes' }
];

@NgModule({
  declarations: [
    AppComponent,
    UploadCandidateComponent,
    MainCandidateComponent,
    CandidatesListComponent,
    CandidateListRickAndMorty,
    LogInComponent,
    SignUpComponent,
    AboutComponent,
    TestBootStrapComponent,
    MainNavbarComponent,
    MainLogoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
