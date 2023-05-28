import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.ListDocument();
  }

  ListDocument() {
    const url =  environment.host+'/api/Download/GetDocumentsList?skip=0&take=100';
    this.http.get<Document[]>(url).subscribe(data => {
      this.documents = data;
    });
  }
  DownloadImage(document: Document): string {
     const baseUrl = environment.host+'/api/Download/DownloadFile';
     const documentId = document.id;
     const quality = 3;
     return `${baseUrl}?documentId=${documentId}&quality=${quality}`;
   }

  vote(any: any)
  {

  }
}
