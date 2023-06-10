import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../enviroment/enviroment';

interface Document {
  id: number;
  imagePath: string;
}


@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit {
  documents: Document[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.ListDocument();
    console.log('Candidate on init');
  }

  ListDocument() {
    const url =  environment.host+'/api/Download/GetDocumentsList?skip=0&take=100';
    // Создание заголовков с куками
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };

    this.http.get<Document[]>(url, options).subscribe(data => {
      this.documents = data;
    });
  }

  DownloadImage(document: Document): string {
    const baseUrl = environment.host+'/api/Download/DownloadFile';
    const documentId = document.id;
    const quality = 3;
    return `${baseUrl}?documentId=${documentId}&quality=${quality}`;
  }

  openCandidate(id: number) {
    this.router.navigate(['/candidate', id]);
  }
}
