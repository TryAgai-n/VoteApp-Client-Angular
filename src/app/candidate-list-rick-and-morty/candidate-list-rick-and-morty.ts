import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-candidate-list-rick-and-morty',
  templateUrl: './candidate-list-rick-and-morty.html',
  styleUrls: ['./candidate-list-rick-and-morty.css']
})
export class CandidateListRickAndMorty implements OnInit {
  CandidatePath: any[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 20;
  totalItems: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCandidates();
  }

  fetchCandidates() {
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${this.currentPage}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.CandidatePath = data.results.map((candidate: any) => ({
        id: candidate.id,
        name: candidate.name,
        species: candidate.species,
        image: candidate.image
      }));

      this.totalItems = data.info.count;
    });
  }

  getPageCount(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchCandidates();
    }
  }

  nextPage() {
    if (this.currentPage < this.getPageCount()) {
      this.currentPage++;
      this.fetchCandidates();
    }
  }

  getCurrentPageClass(pageNumber: number) {
    return {
      'current-page': pageNumber === this.currentPage
    };
  }


  vote(candidate: any){

  }
}
