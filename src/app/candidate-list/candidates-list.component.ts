import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../enviroment/enviroment';

interface Document {
  id: number;
  previewDocumentId: number;
  imagePath: string;
}


@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit {
  candidates: Document[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.ListCandidate();
    console.log('Candidate on init');
  }

  ListCandidate() {
    const url =  environment.host+'/api/Candidate/GetCandidateList?skip=0&take=100';
    // Создание заголовков с куками
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };

    this.http.get<Document[]>(url, options).subscribe(data => {
      this.candidates = data;
    });
  }

  DownloadImage(document: Document): string {
    const baseUrl = environment.host+'/api/Download/DownloadFile';
    const documentId = document.previewDocumentId;
    const quality = 3;
    return `${baseUrl}?documentId=${documentId}&quality=${quality}`;
  }

  openCandidate(id: number) {
    this.router.navigate(['/candidate', id]);
  }
}
