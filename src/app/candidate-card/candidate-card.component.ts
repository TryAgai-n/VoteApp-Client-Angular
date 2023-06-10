import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../enviroment/enviroment';

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.css']
})
export class CandidateCardComponent implements OnInit {
  candidate: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const candidateId = parseInt(params.get('id') || '', 10);
      if (!isNaN(candidateId)) {
        this.getCandidateById(candidateId);
      } else {
        console.error('Invalid candidate ID');
      }
    });
  }

  getCandidateById(candidateId: number)
  {
    const url = `${environment.host}/api/Candidate/GetCandidateById`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };

    this.http.post<any>(url, candidateId, options).subscribe(data => {
      this.candidate = data;
    });
  }
}
