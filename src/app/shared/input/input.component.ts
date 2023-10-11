import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() title: string | undefined;
  @Input() placeHolder: string | undefined;
  @Input() errorMessage: string | undefined;
  @Input() value: string | undefined;
  @Input() disabled: boolean | string = false;
  @Input() type: 'text' | 'date' | undefined = undefined;
  @Input() id: 'id' | 'name' | 'logo' | 'description' | 'freeDate' | 'revisionDate' = 'id';

  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  
  handleChange(value: any) {
    this.notify.emit({id: this.id, value})
  }
}
