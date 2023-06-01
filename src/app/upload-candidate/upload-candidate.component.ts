import { Component, ViewChild } from '@angular/core';
import { environment } from '../enviroments/enviroment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private modalService: NgbModal) {}

  uploadPhoto() {
    const formData = new FormData(this.uploadForm.nativeElement);
    const file = formData.get('photo');

    this.uploading = true;
    this.uploadSuccess = false;

    fetch(environment.host + '/api/Upload/Upload', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          console.log('Upload successful');
          this.uploadSuccess = true;
          this.modalService.open(this.successModal);
        } else {
          console.error('Upload error:', response.status);
        }
        this.uploading = false;
        this.uploadForm.nativeElement.reset(); // Очистка значений формы
      })
      .catch(error => {
        console.error('Upload error:', error);
        this.uploading = false;
        this.uploadForm.nativeElement.reset(); // Очистка значений формы
      });
  }
}
