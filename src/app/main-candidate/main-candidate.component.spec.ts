import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCandidateComponent } from './main-candidate.component';

describe('TestCandidateListComponent', () => {
  let component: MainCandidateComponent;
  let fixture: ComponentFixture<MainCandidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCandidateComponent]
    });
    fixture = TestBed.createComponent(MainCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
