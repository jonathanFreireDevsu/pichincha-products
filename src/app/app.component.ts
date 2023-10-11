import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: ModalService, private router: Router) {}
  modalVisible = this.modalService.getModalVisibility();

  handleClickLogo() {
    this.router.navigate(['']);
  }
  openModal() {
    this.modalService.openModal();
  }
}
