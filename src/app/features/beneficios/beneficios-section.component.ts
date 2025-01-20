import { UpperCasePipe } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { TextHighlightDirective } from '../../shared/text-highlight.directive';

@Component({
	selector: 'app-beneficios-section',
	imports: [FontAwesomeModule, UpperCasePipe, TextHighlightDirective],
	template: `
		@if(icone){
		<fa-icon appTextHighlight class="text-6xl mb-4" [icon]="icone"></fa-icon>
		}
		<span class="text-2xl font-bold mb-2">{{ titulo | uppercase }}</span>
		<span class="text-base">{{ descricao }}</span>
	`,
	host: {
		class: `
			p-6
			flex
			flex-col
			mx-auto
			max-w-5xl
		`,
	},
})
export class BeneficiosSectionComponent {
	@Input() justify?: 'start' | 'end' = 'start';
	@Input({ required: true }) icone!: IconProp;
	@Input({ required: true }) titulo!: string;
	@Input({ required: true }) descricao!: string;

	@HostBinding('class.text-right') get justifyClass() {
		return this.justify === 'end';
	}

	@HostBinding('class.bg-neutral-900') get backgroundClass() {
		return this.justify === 'end';
	}
}
