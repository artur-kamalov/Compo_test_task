import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() size: 'normalSz' | 'bigSz' | 'smallSz'  = 'normalSz'; 
  @Input() theme: '' | 'lightTh' = '';
  @Output('btnClickEvent') btnClickEvent: EventEmitter<any> = new EventEmitter();

  btnClick() {
    this.btnClickEvent.emit()
  }
}
