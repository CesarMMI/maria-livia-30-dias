import { Component } from '@angular/core';
import { FaqItemComponent } from './faq-item.component';
import { InViewDirective } from '../../shared/in-view.directive';

@Component({
	selector: 'app-faq',
	imports: [FaqItemComponent, InViewDirective],
	template: `
		<span appInView class="content text-2xl text-neutral-400">Perguntas Frequentes</span>
		@for (item of items; track $index) {
		<app-faq-item appInView class="content" [question]="item.question" [answer]="item.answer" />
		}
	`,
	host: { class: 'grid px-8 gap-4 max-w-5xl mx-auto' },
	styles: `
		.content {
			opacity: 0;
			transition: opacity 1s ease-in-out;

			&.in-view {
				opacity: 1;
			}
		}
	`,
})
export class FaqComponent {
	items: { question: string; answer: string }[] = [
		{
			question: 'Para quem é indicado o treinamento de 30 dias?',
			answer:
				'Esse treinamento é indicado para qualquer pessoa que deseja melhorar sua forma física, ganhar mais energia e adotar hábitos saudáveis, independentemente do nível atual de condicionamento.',
		},
		{
			question: 'Como recebo acesso ao treinamento?',
			answer: 'Após a compra, todo o conteúdo do treinamento será disponibilizado diretamente na plataforma MfitPersonal.',
		},
		{
			question: 'O que inclui o treinamento?',
			answer:
				'Você terá aos nossos treinos personalizados, dicas alimentares e suporte exclusivo para ajudar na sua jornada.',
		},
		{
			question: 'E se eu não conseguir acompanhar?',
			answer:
				'O treinamento é flexível! Você pode ajustar o ritmo conforme sua disponibilidade e condicionamento físico, garantindo que acompanhe no seu tempo.',
		},
	];
}
