import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductViewComponent } from './add-product-view.component';
import { mockDeclarations } from '../constants/initAngularModule';

describe('Add product view component', () => {
  let fixture: ComponentFixture<AddProductViewComponent>;
  let component: AddProductViewComponent;

  beforeEach(() => {
    TestBed.configureTestingModule(mockDeclarations);

    fixture = TestBed.createComponent(AddProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the AddProductViewComponent', () => {
    expect(component).toBeTruthy();
  });
  
  afterEach(() => {
    TestBed.resetTestingModule();
  });
});