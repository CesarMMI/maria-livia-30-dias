import { Directive, HostBinding, HostListener, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Subject, switchMap, takeUntil, tap } from 'rxjs';

@Directive({
	selector: 'a[appActionButton]',
	host: {
		class: `
			p-4
			inline-block
			rounded-lg

			text-2xl
			text-center
			font-bold

			duration-800
			transition-all

			bg-amber-600
			hover:bg-amber-700
			active:bg-amber-800
  		`,
		'[class.animate-grow]': 'inGrowAnimation',
		href: 'https://wa.me/5511966374958?text=Ol%C3%A1%20Mundo%21',
		target: '_blank',
	},
})
export class ActionButtonDirective implements OnInit, OnDestroy {
	private destroy$ = new Subject<void>();
	private growTrigger$ = new BehaviorSubject<boolean>(true);
	private inGrowAnimation = false;

	ngOnInit() {
		this.startShakingLoop();
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}

	private startShakingLoop() {
		this.growTrigger$
			.pipe(
				switchMap(shouldShake => {
					if (!shouldShake) return [];
					return interval(2000).pipe(
						tap(() => {
							this.inGrowAnimation = true;
							setTimeout(() => (this.inGrowAnimation = false), 800);
						})
					);
				}),
				takeUntil(this.destroy$)
			)
			.subscribe();
	}

	private stopShakingLoop() {
		this.growTrigger$.next(false);
	}
}
