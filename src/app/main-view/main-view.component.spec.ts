import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockDeclarations } from '../constants/initAngularModule';
import { MainViewComponent } from './main-view.component';

describe('Edit product view component', () => {
  let fixture: ComponentFixture<MainViewComponent>;
  let component: MainViewComponent;

  beforeEach(() => {
    TestBed.configureTestingModule(mockDeclarations);

    fixture = TestBed.createComponent(MainViewComponent);
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