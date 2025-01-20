import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-carousel-button',
	imports: [FontAwesomeModule],
	template: `
		@if(icon(); as icon){
		<button [class]="'transition-colors ' + color()" (click)="clickEvent.emit($event)">
			<fa-icon appTextHighlight class="text-2xl " [icon]="icon"></fa-icon>
		</button>
		}
	`,
	host: { class: 'inline-block' },
})
export class CarouselButtonComponent {
	lighter = input<boolean>(false);
	side = input<'left' | 'right'>('left');

	clickEvent = output<Event>();

	color = computed(() => {
		if (this.lighter()) return ' text-neutral-200 hover:text-neutral-100 active:text-neutral-50';
		return ' text-neutral-500 hover:text-neutral-300 active:text-neutral-50';
	});

	icon = computed(() => {
		if (this.side() === 'left') return this.iconLeft;
		return this.iconRight;
	});

	private iconLeft = faChevronCircleLeft;
	private iconRight = faChevronCircleRight;
}
