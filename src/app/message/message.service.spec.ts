import { TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';
import { AlertMessage } from '../interfaces/alert-message';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
    });

    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get alert message', () => {
    const alertMessage: AlertMessage = {
      type: 'success',
      text: 'Test message',
    };

    service.setMessage(alertMessage);

    service.message$.subscribe((message) => {
      expect(message).toEqual(alertMessage);
    });
  });

  it('should clear the alert message', () => {
    service.clearMessage();

    service.message$.subscribe((message) => {
      expect(message).toEqual({ type: 'success', text: '' });
    });
  });
});