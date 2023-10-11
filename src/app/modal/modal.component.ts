import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import { DataService } from '../services/data.service';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private dataService: DataService,
    private messageService: MessageService
  ) {}
  modalText= '';
  modalId= '';
  closeModal() {
    this.modalService.closeModal();
  }

  handleDeleteItem(id: string) {
    this.dataService.delete(id).subscribe((response) => {
      if (response) {
        this.messageService.setMessage({type: 'success', text:'El ítem se ha eliminado correctamente.'});
        this.dataService.get().subscribe((data) => {
          this.dataService.setData(data);
        });
      }
      this.closeModal();
    }, (error) => {
      this.closeModal();
      this.messageService.setMessage({type: 'error', text:'No se pudo realizar esta operación.'});
    });
  }

  ngOnInit() {
    this.modalText = this.modalService.getModalText();
    this.modalId = this.modalService.getModalId();
  }
};