import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockDeclarations } from '../constants/initAngularModule';
import { EditProductViewComponent } from './edit-product-view.component';

describe('Edit product view component', () => {
  let fixture: ComponentFixture<EditProductViewComponent>;
  let component: EditProductViewComponent;

  beforeEach(() => {
    TestBed.configureTestingModule(mockDeclarations);

    fixture = TestBed.createComponent(EditProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the EditProductViewComponent', () => {
    expect(component).toBeTruthy();
  });
  
  afterEach(() => {
    TestBed.resetTestingModule();
  });
});