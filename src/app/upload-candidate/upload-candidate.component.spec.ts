import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCandidateComponent } from './upload-candidate.component';

describe('UploadCandidateComponent', () => {
  let component: UploadCandidateComponent;
  let fixture: ComponentFixture<UploadCandidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadCandidateComponent]
    });
    fixture = TestBed.createComponent(UploadCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
