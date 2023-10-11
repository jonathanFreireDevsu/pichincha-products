import { TestBed } from '@angular/core/testing';
import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalService],
    });

    service = TestBed.inject(ModalService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get modal text', () => {
    service.setModalText('Test Modal Text');
    expect(service.getModalText()).toBe('Test Modal Text');
  });
  it('should set and get modal id', () => {
    service.setModalId('1');
    expect(service.getModalId()).toBe('1');
  });

  it('should get modal visibility', () => {
    expect(service.getModalVisibility().value).toBe(false);

    service.openModal();
    expect(service.getModalVisibility().value).toBe(true);
    service.closeModal();
    expect(service.getModalVisibility().value).toBe(false);
  });
});