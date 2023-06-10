import { Component, ViewChild } from '@angular/core';
import { environment } from '../enviroment/enviroment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-candidate',
  templateUrl: './upload-candidate.component.html',
  styleUrls: ['./upload-candidate.component.css']
})
export class UploadCandidateComponent {
  @ViewChild('successModal') successModal: any;
  @ViewChild('uploadForm') uploadForm: any;

  uploading = false;
  uploadSuccess = false;

  constructor(private modalService: NgbModal, private http: HttpClient) {}

  uploadPhoto() {
    const formData = new FormData(this.uploadForm.nativeElement);
    const file = formData.get('photo');

    this.uploading = true;
    this.uploadSuccess = false;

    this.http.post(environment.host + '/api/Upload/Upload', formData, { withCredentials: true })
      .subscribe(
        () => {
          console.log('Upload successful');
          this.uploadSuccess = true;
          this.modalService.open(this.successModal);
          this.uploading = false;
          this.uploadForm.nativeElement.reset(); // Очистка значений формы
        },
        (error) => {
          console.error('Upload error:', error);
          this.uploading = false;
          this.uploadForm.nativeElement.reset(); // Очистка значений формы
        }
      );
  }
}
