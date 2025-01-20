import { Component, OnDestroy, OnInit } from '@angular/core';
import { TextHighlightDirective } from '../../shared/text-highlight.directive';
import { ActionButtonDirective } from '../../shared/action-button.directive';
import { Subscription, interval } from 'rxjs';

@Component({
	selector: 'app-call-action',
	imports: [TextHighlightDirective, ActionButtonDirective],
	template: `
		<div class=" bg-neutral-900 h-full rounded-lg flex flex-col justify-between p-4 gap-8 max-w-xl mx-auto">
			<span class="text-4xl font-bold text-center"
				>A Decisão Que Vai<br /><span appTextHighlight>MUDAR SUA VIDA</span><br />Está a Um Clique!</span
			>
			<div class="mx-auto">
				<span class="text-2xl">O que você vai receber:</span>
				<ul class="text-base list-disc ml-8 mt-2 text-neutral-400">
					<li>Cras tincidunt lacus mi, eu sagittis metus cursus non.</li>
					<li>Quisque ut velit nisi. Nulla ex justo, molestie ut accumsan nec</li>
					<li>Commodo non metus.</li>
					<li>Aliquam blandit auctor ex et aliquet.</li>
					<li>Sed justo augue, finibus sed finibus nec, auctor non lorem.</li>
				</ul>
			</div>
			<div class="grid gap-2">
				<span class="text-2xl text-center">De <span class="line-through font-bold">R$ 200,00</span> por apenas</span>
				<span class="text-center">10x de <span appTextHighlight class="text-7xl">R$ 9,90</span></span>
				<span class="text-2xl text-center">ou <span class="font-bold">R$ 99,00</span> à vista</span>
			</div>
			<div class="grid gap-2">
				<span class="text-neutral-400 text-center">Tempo Restante</span>
				<div class="flex items-center gap-3 justify-center font-bold">
					<div class="bg-neutral-950 p-4 rounded-lg text-3xl">{{ countdown.hours }}</div>
					<span>:</span>
					<div class="bg-neutral-950 p-4 rounded-lg text-3xl">{{ countdown.minutes }}</div>
					<span>:</span>
					<div class="bg-neutral-950 p-4 rounded-lg text-3xl">{{ countdown.seconds }}</div>
				</div>
			</div>
			<a appActionButton>COMECE SUA JORNADA!</a>
		</div>
	`,
	host: {
		class: `
    block
    p-8
    h-screen
    w-full
    `,
	},
})
export class CallActionComponent implements OnInit, OnDestroy {
	countdown = { hours: '0', minutes: '0', seconds: '0' };

	private targetDate = new Date('2025-01-21');
	private timerSubscription!: Subscription;

	ngOnInit() {
		this.startCountdown();
	}

	ngOnDestroy() {
		if (this.timerSubscription) this.timerSubscription.unsubscribe();
	}

	private startCountdown() {
		this.timerSubscription = interval(1000).subscribe(() => {
			this.updateCountdown();
		});
	}

	private updateCountdown() {
		const now = new Date().getTime();
		const target = this.targetDate.getTime();
		const timeDifference = target - now;

		if (timeDifference <= 0) {
			this.countdown = { hours: '00', minutes: '00', seconds: '00' };
			this.timerSubscription.unsubscribe();
			return;
		}

		const seconds = Math.floor(timeDifference / 1000) % 60;
		const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
		const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;

		this.countdown = {
			hours: hours.toString().padStart(2, '0'),
			minutes: minutes.toString().padStart(2, '0'),
			seconds: seconds.toString().padStart(2, '0'),
		};
	}
}
