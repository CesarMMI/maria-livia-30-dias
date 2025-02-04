import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ActionButtonDirective } from '../../shared/action-button.directive';
import { TextHighlightDirective } from '../../shared/text-highlight.directive';
import { CountdownService } from './countdown.service';

@Component({
	selector: 'app-call-action',
	imports: [AsyncPipe, TextHighlightDirective, ActionButtonDirective],
	template: `
		<div class=" bg-neutral-900 h-full rounded-lg flex flex-col justify-between p-4 pt-8 gap-8 max-w-xl mx-auto">
			<span class="text-2xl md:text-4xl font-bold text-center"
				>A Decisão Que Vai<br /><span appTextHighlight>MUDAR SUA VIDA</span><br />Está a Um Clique!</span
			>
			<div class="mx-auto">
				<span class="text-xl md:text-2xl">O que você vai receber:</span>
				<ul class="text-sm md:text-base list-disc ml-6 mt-2 text-neutral-400">
				<li><span class="text-neutral-50">Treinamento de Força Personalizado:</span> Exercícios para tonificar e fortalecer seu corpo, adaptados ao seu nível de condicionamento.</li>
				<li><span class="text-neutral-50">Sessões Aeróbicas Dinâmicas:</span> Rotinas aeróbicas envolventes para melhorar o condicionamento físico e queimar calorias.</li>
				<li><span class="text-neutral-50">Dicas de Alimentação Exclusivas:</span> Orientações práticas para ajustar sua dieta e potencializar seus resultados de forma saudável.</li>
				<li><span class="text-neutral-50">Acesso Fácil e Prático:</span> Acompanhe seu progresso e realize os treinos diretamente no aplicativo MfitPersonal.</li>
				</ul>
			</div>
			<div class="grid gap-2">
				<span class="text-2xl text-center">De <span class="line-through font-bold">R$ 150,00</span> por apenas</span>
				<span class="text-center text-neutral-400"><span appTextHighlight class="text-6xl">R$ 66,99</span></span>
			</div>
			@if(countdown$ | async; as countdown){
			<div class="grid gap-1">
				<span class="text-neutral-400 text-center text-sm">Tempo Restante</span>
				<div class="flex items-center gap-3 justify-center font-bold">
					<div class="bg-neutral-950 p-4 rounded-lg text-2xl">{{ countdown.hours }}</div>
					<span>:</span>
					<div class="bg-neutral-950 p-4 rounded-lg text-2xl">{{ countdown.minutes }}</div>
					<span>:</span>
					<div class="bg-neutral-950 p-4 rounded-lg text-2xl">{{ countdown.seconds }}</div>
				</div>
			</div>
			}
			<a appActionButton>COMECE SUA JORNADA!</a>
		</div>
	`,
	host: { class: `block p-8 w-full` },
})
export class CallActionComponent implements OnInit, OnDestroy {
	private countdownService = inject(CountdownService);

	countdown$ = this.countdownService.countdown$;
	countdown = { hours: '0', minutes: '0', seconds: '0' };

	private targetDate = new Date('2025-01-21');
	private timerSubscription!: Subscription;

	ngOnInit() {
		this.startCountdown();
		this.countdownService.startCountdown();
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
