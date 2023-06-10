import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthorize = true;

  constructor(private router: Router, private cookieService: CookieService) {}

  ngOnInit() {
    const loginCookieExists = this.cookieService.check('UserCookies');
    this.isAuthorize = !loginCookieExists;
    if (!loginCookieExists) {
      this.router.navigate(['/log-in']);
    }
    else {
      this.router.navigate(['/votes']);
    }
  }
}
