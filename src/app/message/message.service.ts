import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertMessage } from '../interfaces/alert-message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject = new Subject<AlertMessage>();

  message$ = this.messageSubject.asObservable();

  setMessage(message: AlertMessage) {
    this.messageSubject.next(message);
  }

  clearMessage() {
    this.messageSubject.next({type: 'success', text: ''});
  }
}