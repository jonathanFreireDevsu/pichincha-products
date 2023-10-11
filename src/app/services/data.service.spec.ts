import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { RawData } from '../interfaces/raw-data';
import { mockDeclarations } from '../constants/initAngularModule';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;
  let mockExample = {
      "id": "12311",
      "name": "TEST 1",
      "description": "Producto de prueba, generado para testear componentes ademas de otros implementos",
      "logo": "https://previews.123rf.com/images/magurok/magurok1408/magurok140800176/30819935-vector-tarjeta-de-cr%C3%A9dito-icon-negro.jpg",
      "date_release": "2023-10-19T00:00:00.000+00:00",
      "date_revision": "2024-10-19T00:00:00.000+00:00"
    };

  beforeEach(() => {
    TestBed.configureTestingModule(mockDeclarations);

    service = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('DataService', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve data via GET', () => {
    const mockData: RawData[] = [mockExample];

    service.get().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should add data via POST', () => {
    const newItem: RawData = mockExample;

    service.add(newItem).subscribe((data) => {
      expect(data).toEqual(newItem);
    });

    const req = httpTestingController.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('POST');
    req.flush(newItem);
  });

  it('should update data via PUT', () => {
    const updatedItem: RawData = mockExample;

    service.update(updatedItem).subscribe((data) => {
      expect(data).toEqual(updatedItem);
    });

    const req = httpTestingController.expectOne(`${service['apiUrl']}?id=${updatedItem.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedItem);
  });

  it('should delete data via DELETE', () => {
    const idToDelete = '1';

    service.delete(idToDelete).subscribe();

    const req = httpTestingController.expectOne(`${service['apiUrl']}?id=${idToDelete}`);
    expect(req.request.method).toBe('DELETE');
  });

  it('should validate data via GET', () => {
    const idToValidate = '1';
    const verificationResponse = { isValid: true };

    service.validate(idToValidate).subscribe((data) => {
      expect(data).toEqual(verificationResponse);
    });

    const req = httpTestingController.expectOne(`${service['apiUrl']}/verification?id=${idToValidate}`);
    expect(req.request.method).toBe('GET');
    req.flush(verificationResponse);
  });
});