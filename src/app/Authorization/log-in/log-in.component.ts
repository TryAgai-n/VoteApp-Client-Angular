import {Component, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../enviroments/enviroment';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent {
  @ViewChild('errorModal') errorModal: any;
  @ViewChild('loginErrorModal') loginErrorModal: any;
  showRegistrationForm: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
    private modalService: NgbModal,
  ) {}

  login?: string;
  password?: string;
  registerLogin?: string;
  registerPassword?: string;
  registerFirstName?: string;
  registerLastName?: string;
  registerPhone?: string;

  submitForm() {
    const url = environment.host + '/api/User/Login';
    const body = {
      login: this.login,
      password: this.password
    };

    this.http
      .post<any>(url, body, { observe: 'response', withCredentials: true })
      .subscribe(
        response => {
          // Обработка успешного ответа от сервера
          this.router.navigateByUrl('/rick-and-morty-votes', {
            skipLocationChange: true
          }).then(() => {
            this.router.navigate(['/rick-and-morty-votes']);
          });

          console.log('Login successful');
        },
        error => {
          if(error.status == 400)
          {
            this.modalService.open(this.errorModal);
          }
          if(error.status == 404)
          {
            this.modalService.open(this.loginErrorModal);
          }
          if(error.status == 500)
          {
            this.modalService.open(this.loginErrorModal);
          }

          console.error('Login error');
          console.error(error);
        }
      );
  }

  registerUser() {
    const url = environment.host + '/api/User/Register';
    const body = {
      login: this.registerLogin,
      firstName: this.registerFirstName,
      lastName: this.registerLastName,
      phone: this.registerPhone,
      password: this.registerPassword
    };

    this.http
      .post<any>(url, body, { observe: 'response', withCredentials: true })
      .subscribe(
        response => {
          // Обработка успешного ответа от сервера
          console.log('Registration successful');

          // Переключение на форму входа после успешной регистрации
          this.showRegistrationForm = false;
          this.login = this.registerLogin;
          this.password = this.registerPassword;
          this.registerLogin = '';
          this.registerPassword = '';
          this.registerFirstName = '';
          this.registerLastName = '';
          this.registerPhone = '';
        },
        error => {
          if(error.status == 400)
          {
            this.modalService.open(this.errorModal);
          }


          console.error('Registration error');
          console.error(error);
        }
      );
  }
}
