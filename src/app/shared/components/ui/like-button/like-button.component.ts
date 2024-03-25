import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-like-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './like-button.component.html',
  styleUrl: './like-button.component.scss'
})
export class LikeButtonComponent {
  isLiked = false;

  ngOnInit(): void {
    if (localStorage.getItem('isLiked') === 'false') {
      this.isLiked = false
    }
    else {
      this.isLiked = true
    }
    return
  }

  toggleLike(event: any) {
    this.isLiked = event.target.checked;
    localStorage.setItem('isLiked', `${this.isLiked}`)
  }
}
