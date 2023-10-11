import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { mockDeclarations } from './constants/initAngularModule';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule(mockDeclarations));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
