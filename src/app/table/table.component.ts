import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { Router } from '@angular/router';
import { FormService } from '../form/form.service';
import { HelpersService } from '../services/helpers.service';
import { RawData } from '../interfaces/raw-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: RawData[] = [];
  pageSize = 5;
  currentPage = 1;
  pageList = [1]

  constructor(
    private modalService: ModalService,
    private router: Router,
    private formService: FormService,
    private helperService: HelpersService,

    ) {}
  
  handleModal(id: string, name: string) {
    this.modalService.setModalText(`¿Está seguro de eliminar el producto ${name}?`);
    this.modalService.setModalId(id);
    this.modalService.openModal();
  }
  handleCallEdit(item: RawData) {
    const formData = this.formService.getFormData();
    formData.id.value = item.id;
    formData.logo.value = item.logo;
    formData.name.value = item.name;
    formData.description.value = item.description;
    formData.freeDate.value = this.helperService.isoToYYYYMMDD(item.date_release);
    formData.revisionDate.value = this.helperService.isoToYYYYMMDD(item.date_revision);
    this.formService.setForm({
      ...this.formService.getFormData(),

    });
    this.router.navigate(['editar-producto']);
  }
  calcPages(dataLength: number) {
    let result = Math.floor(dataLength / this.pageSize);
    const remainder = dataLength % this.pageSize;
    result = result + (remainder ? 1 : 0);
    let numberList = [];
    for (let i = 1; i <= result; i++) {
      numberList.push(i);
    }
    console.log(numberList);
    return numberList;
  }
  
  ngOnInit(): void {
    this.pageList = this.calcPages(this.data.length);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data']) {
      this.pageList = this.calcPages(this.data.length);
    }
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
  }
}
