import { Component } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../shared/components/ui';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  styles: HTMLElement['style'] | {} = {
    fontWeight: 500,
    flex: 1
  }
}
