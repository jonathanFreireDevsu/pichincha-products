import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../services/validate.service';
import { HelpersService } from '../services/helpers.service';
import { DataService } from '../services/data.service';
import { FormService } from './form.service';
import { MessageService } from '../message/message.service';
import { ValidationData } from '../interfaces/validation-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit, OnDestroy {
  @Input() type: 'add' | 'update' = 'add';
  constructor(
    private router: Router,
    private validateService: ValidateService,
    private helperService: HelpersService,
    private dataService: DataService,
    private formService: FormService,
    private messageService: MessageService
  ) {
    
  }
  emptyForm: ValidationData = {
    id: {
      name: 'ID',
      placeHolder: '',
      errorMessage: '',
      value: ''
    },
    name: {
      name: 'Nombre',
      placeHolder: '',
      errorMessage: '',
      value: ''
    },
    description: {
      name: 'Descripción',
      placeHolder: '',
      errorMessage: '',
      value: ''
    },
    logo: {
      name: 'Logo',
      placeHolder: '',
      errorMessage: '',
      value: ''
    },
    freeDate: {
      name: 'Fecha Liberación',
      placeHolder: '',
      errorMessage: '',
      value: ''
    },
    revisionDate: {
      name: 'Fecha Revisión',
      placeHolder: '',
      errorMessage: '',
      value: ''
    },
  };
  formData: ValidationData = {...this.emptyForm};

  handleValueChange($event: {
    id: 'id' | 'name' | 'logo' | 'description' | 'freeDate' | 'revisionDate',
    value: any
  }) {
    const {id, value} = $event;
    const newForm = {
      ...this.formData,
      [id]: {
        ...this.formData[id],
        value: value
      }  
    }
    if (id === 'freeDate') {
      newForm.revisionDate.value = this.helperService.stringPlusOneYear(value);
    }
    this.formData = newForm;
  }

  onClean() {
    const currentIdValue = this.formData.id.value;

    this.formData = {...this.emptyForm};
    if (this.type === 'update') {
      this.formData.id.value = currentIdValue;
    }
    this.formData.id.errorMessage = '';
    this.formData.logo.errorMessage = '';
    this.formData.name.errorMessage = '';
    this.formData.description.errorMessage = '';
    this.formData.revisionDate.errorMessage = '';
    this.formData.revisionDate.value = '';
    this.formData.freeDate.errorMessage = '';
  }

  generateSendData() {
    return {
      'id': this.formData.id.value,
      'logo': this.formData.logo.value,
      'name': this.formData.name.value,
      'description': this.formData.description.value,
      'date_release': this.formData.freeDate.value,
      'date_revision': this.formData.revisionDate.value,
    }
  }

  onSend() {
    const {error, resultFormData} = this.validateService.validate(this.formData);
    this.formData = resultFormData;
    
    if (this.type === 'update' && !error) {
      this.dataService.update(this.generateSendData()).subscribe((response) => {
        this.messageService.setMessage({type: 'success', text:'Guardado exitosamente.'});
        this.router.navigate(['']);
      }, (error) => {
        this.messageService.setMessage({type: 'error', text:'No se pudo realizar esta operación.'});
      });
    }
    if (this.type === 'add' && !error) {
      this.dataService.validate(this.formData.id.value).subscribe((response) => {
        if (!response) {
          this.dataService.add(this.generateSendData()).subscribe((response) => {
            this.messageService.setMessage({type: 'success', text:'Guardado exitosamente.'});
            this.router.navigate(['']);
          }, (error) => {
            this.messageService.setMessage({type: 'error', text:'No se pudo realizar esta operación.'});
          });
        } else {
          this.formData.id.errorMessage = 'El id ya existe.';
        }
      }, (error) => {
        this.messageService.setMessage({type: 'error', text:'No se pudo realizar esta operación.'});
      });
    }
  }

  ngOnDestroy(): void {
    this.formData = this.emptyForm;
    this.formService.setForm(this.emptyForm);
  }
  ngOnInit(): void {
  this.formData = this.type === 'add' ? {...this.emptyForm} :  {...this.formService.getFormData()};
  }
}
