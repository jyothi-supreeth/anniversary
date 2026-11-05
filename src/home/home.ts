import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  readonly isLetterOpen = signal(false);

  toggleLetter(): void {
    this.isLetterOpen.update((isOpen) => !isOpen);
  }
}
