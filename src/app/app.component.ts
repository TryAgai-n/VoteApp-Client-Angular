import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Платформа голосования';

  activeComponent: any = 'sign-up';
  setActiveComponent(component: any) {
    this.activeComponent = component;
  }
}
