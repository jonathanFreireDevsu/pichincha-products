import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormComponent } from './form.component';
import { mockDeclarations } from '../constants/initAngularModule';

describe('FormComponent', () => {
  let fixture: ComponentFixture<FormComponent>;
  let component: FormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule(mockDeclarations);

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the FormComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.type).toBe('add');
    expect(component.formData.id.value).toBe('');
  });

  it('should handle value changes correctly', () => {
    const newValue = 'New Value';
    component.handleValueChange({ id: 'name', value: newValue });
    expect(component.formData.name.value).toBe(newValue);
  });

  it('should clean the form data correctly', () => {
    component.formData.name.value = 'Some Value';
    component.onClean();
    expect(component.formData).toEqual(component.emptyForm);
  });

  it('should generate send data correctly', () => {
    const sendValue = component.generateSendData();
    expect(sendValue).toEqual({
      id: '',
      logo: '',
      name: '',
      description: '',
      date_release: '',
      date_revision: '',
    });
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});