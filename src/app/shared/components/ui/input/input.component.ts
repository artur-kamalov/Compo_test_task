import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() placeholder: string = 'Placeholder'; 
  @Input() hasActiveError: boolean = false; 
  @Input() size: 'normal' | 'big'  = 'normal'; 
  @Input() styles: HTMLElement["style"] | {} = {};

  getDynamicStyles() {
    return {
      ...this.styles
    }
  }
}
