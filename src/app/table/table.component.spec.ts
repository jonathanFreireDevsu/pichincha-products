import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockDeclarations } from '../constants/initAngularModule';
import { TableComponent } from './table.component';

describe('Edit product view component', () => {
  let fixture: ComponentFixture<TableComponent>;
  let component: TableComponent;

  beforeEach(() => {
    TestBed.configureTestingModule(mockDeclarations);

    fixture = TestBed.createComponent(TableComponent);
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