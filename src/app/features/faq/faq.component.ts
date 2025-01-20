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
			question: 'Lorem ipsum dolor sit amet ?',
			answer:
				'Praesent dictum, tortor quis faucibus dictum, ex leo commodo libero, vitae sagittis augue est ac velit. Duis tortor orci, finibus condimentum tellus in, viverra consectetur ipsum. ',
		},
		{
			question: 'Proin venenatis ligula justo ?',
			answer:
				'Praesent dictum, tortor quis faucibus dictum, ex leo commodo libero, vitae sagittis augue est ac velit. Duis tortor orci, finibus condimentum tellus in, viverra consectetur ipsum. ',
		},
		{
			question: 'Ut massa augue, sagittis ut ante eu?',
			answer:
				'Praesent dictum, tortor quis faucibus dictum, ex leo commodo libero, vitae sagittis augue est ac velit. Duis tortor orci, finibus condimentum tellus in, viverra consectetur ipsum. ',
		},
	];
}
