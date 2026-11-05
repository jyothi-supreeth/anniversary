import { Component, OnDestroy, signal } from '@angular/core';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  hasArrived: boolean;
}

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnDestroy {
  private readonly anniversary = new Date(2027, 0, 16);
  readonly isLetterOpen = signal(false);
  readonly countdown = signal(this.getCountdown());
  private readonly countdownTimer = setInterval(() => {
    this.countdown.set(this.getCountdown());
  }, 60_000);

  toggleLetter(): void {
    this.isLetterOpen.update((isOpen) => !isOpen);
  }

  ngOnDestroy(): void {
    clearInterval(this.countdownTimer);
  }

  private getCountdown(): Countdown {
    const remaining = this.anniversary.getTime() - Date.now();
    const totalMinutes = Math.floor(Math.max(remaining, 0) / 60_000);

    return {
      days: Math.floor(totalMinutes / 1_440),
      hours: Math.floor((totalMinutes % 1_440) / 60),
      minutes: totalMinutes % 60,
      hasArrived: remaining <= 0,
    };
  }
}
