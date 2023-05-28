import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { UploadCandidateComponent } from './upload-candidate/upload-candidate.component';
import { MainCandidateComponent } from './main-candidate/main-candidate.component';
import { CandidatesListComponent } from './main-candidate/candidate-list/candidates-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadCandidateComponent,
    MainCandidateComponent,
    CandidatesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
