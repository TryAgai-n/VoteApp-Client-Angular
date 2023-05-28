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


@NgModule({
  declarations: [
    AppComponent,
    UploadCandidateComponent,
    MainCandidateComponent,
    CandidatesListComponent,
    LogInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
