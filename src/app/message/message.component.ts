import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnDestroy  {
  message: string | null = null;
  type: 'success' | 'error' = 'success';

  private subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.message$.subscribe(({type, text}) => {
      this.message = text;
      this.type = type;
      setTimeout(() => {
        this.message = null;
      }, 5000);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}