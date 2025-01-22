import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, Subscription } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CountdownService {
	private start: number = 2 * 24 * 60 * 60 * 1000;
	private threshold: number = 2 * 60 * 60 * 1000;
	private countdown: number = this.start;
	private interval$: Subscription | null = null;
	private localStorageKey: string = 'countdown-timer';
	private countdownSubject = new BehaviorSubject<number>(this.countdown);

	countdown$ = this.countdownSubject.asObservable().pipe(map(() => this.getTimeRemaining()));

	constructor() {
		this.loadCountdown();
	}

	startCountdown() {
		if (this.interval$) return;

		this.interval$ = interval(1000).subscribe(() => {
			this.countdown -= 1000;
			this.saveCountdown();

			if (this.countdown <= this.threshold) {
				this.countdown = this.start;
				this.saveCountdown();
			}

			this.countdownSubject.next(this.countdown);
		});
	}

	stopCountdown() {
		this.interval$?.unsubscribe();
		this.interval$ = null;
	}

	private loadCountdown() {
		const savedCountdown = localStorage.getItem(this.localStorageKey);
		if (!savedCountdown) return;

		this.countdown = parseInt(savedCountdown, 10);
		this.countdownSubject.next(this.countdown);
	}

	private saveCountdown() {
		localStorage.setItem(this.localStorageKey, this.countdown.toString());
	}

	private getTimeRemaining() {
		const totalSeconds = Math.floor(this.countdown / 1000);
		const days = Math.floor(totalSeconds / (24 * 60 * 60));
		const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
		const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
		const seconds = totalSeconds % 60;

		const result = { hours: hours + days * 24, minutes, seconds };
		return {
			hours: result.hours.toString().padStart(2, '0'),
			minutes: minutes.toString().padStart(2, '0'),
			seconds: seconds.toString().padStart(2, '0'),
		};
	}
}
