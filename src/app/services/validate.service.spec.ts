import { TestBed, inject } from '@angular/core/testing';
import { ValidateService } from './validate.service';
import { HelpersService } from './helpers.service';

describe('ValidateService', () => {
  let service: ValidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateService, HelpersService],
    });

    service = TestBed.inject(ValidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate a form with no errors', () => {
    const formData = {
      id: { value: '123', errorMessage: '' },
      name: { value: 'Test Name', errorMessage: '' },
      description: { value: 'Test Description', errorMessage: '' },
      logo: { value: 'Logo', errorMessage: '' },
      freeDate: { value: '2023-10-11', errorMessage: '' },
      revisionDate: { value: '2024-10-11', errorMessage: '' },
    };

    const { error } = service.validate(formData);

    expect(error).toBe(false);
  });

  it('should validate a form with errors', () => {
    const formData = {
      id: { value: '1', errorMessage: '' },
      name: { value: '', errorMessage: '' },
      description: { value: 'Short', errorMessage: '' },
      logo: { value: '', errorMessage: '' },
      freeDate: { value: '2022-10-11', errorMessage: '' },
      revisionDate: { value: '2022-10-11', errorMessage: '' },
    };

    const { error, resultFormData } = service.validate(formData);

    expect(error).toBe(true);
    expect(resultFormData.id.errorMessage).toBe('Mínimo 3 caractéres y máximo 10.');
    expect(resultFormData.name.errorMessage).toBe('Requerido.');
    expect(resultFormData.description.errorMessage).toBe('Mínimo 10 caractéres y máximo 100.');
    expect(resultFormData.logo.errorMessage).toBe('Requerido.');
    expect(resultFormData.freeDate.errorMessage).toBe('La fecha debe ser mayor o igual a la actual.');
    expect(resultFormData.revisionDate.errorMessage).toBe('Debe ser un año mayor a la fecha de liberación.');
  });
});