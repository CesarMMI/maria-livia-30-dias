import { Directive, OnDestroy, OnInit } from '@angular/core';
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
		href:
			'https://wa.me/5511966374958?text=Acabei%20de%20clicar%20no%20bot%C3%A3o%20%22Garanta%20Sua%20Vaga%22%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20%2ADesafio%2030%20Dias%2A.%20Poderiam%20me%20passar%20os%20detalhes%20sobre%20como%20posso%20confirmar%20minha%20inscri%C3%A7%C3%A3o%3F',
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
