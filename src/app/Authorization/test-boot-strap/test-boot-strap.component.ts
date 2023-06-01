import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-test-boot-strap',
  templateUrl: './test-boot-strap.component.html',
  styleUrls: ['./test-boot-strap.component.css']
})
export class TestBootStrapComponent {
  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
