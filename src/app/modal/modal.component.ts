import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public open(){
    this.visibleChange.emit(true);
  }

  public close(){
    this.visibleChange.emit(false);
  }

}
