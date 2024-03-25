import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent, InputComponent, LikeButtonComponent, ToggleButtonComponent } from './shared/components/ui';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ButtonComponent, 
    LikeButtonComponent, 
    ToggleButtonComponent, 
    InputComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Compo_test_task';
}
