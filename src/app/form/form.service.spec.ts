import { TestBed } from '@angular/core/testing';
import { FormService } from './form.service';
import { emptyForm } from '../constants/empty-form';
import { ValidationData } from '../interfaces/validation-data';

describe('FormService', () => {
  let service: FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormService],
    });

    service = TestBed.inject(FormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get form data', () => {
    const testData: ValidationData = {
      id: {
        name: 'id',
        placeHolder: '',
        errorMessage: '',
        value: '',
      },
      name: {
        name: 'name',
        placeHolder: '',
        errorMessage: '',
        value: '',
      },
      logo: {
        name: 'logo',
        placeHolder: '',
        errorMessage: '',
        value: '',
      },
      description: {
        name: 'description',
        placeHolder: '',
        errorMessage: '',
        value: '',
      },
      freeDate: {
        name: 'freeDate',
        placeHolder: '',
        errorMessage: '',
        value: '',
      },
      revisionDate: {
        name: 'revisionDate',
        placeHolder: '',
        errorMessage: '',
        value: '',
      },
    };

    service.setForm(testData);

    const retrievedData = service.getFormData();

    expect(retrievedData).toEqual(testData);
  });

  it('should return the default empty form', () => {
    const defaultData = service.getFormData();

    expect(defaultData).toEqual(emptyForm);
  });
});