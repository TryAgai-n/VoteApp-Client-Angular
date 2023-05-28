import { Component } from '@angular/core';
import { environment } from '../enviroments/enviroment';

@Component({
  selector: 'app-upload-candidate',
  templateUrl: './upload-candidate.component.html',
  styleUrls: ['./upload-candidate.component.css']
})
export class UploadCandidateComponent {

  constructor() {}

  uploadPhoto(event: any) {
    event.preventDefault(); // Предотвращение перенаправления после отправки формы

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('photo', file);

    fetch(environment.host + '/api/Upload/Upload', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          console.log('Upload successful');
        } else {
          console.error('Upload error:', response.status);
        }
      })
      .catch(error => {
        console.error('Upload error:', error);
      });
  }
}
