import { Component } from '@angular/core';
import { TextHighlightDirective } from '../../shared/text-highlight.directive';
import { DepoimentosCarouselComponent } from './depoimentos-carousel.component';
import { InViewDirective } from '../../shared/in-view.directive';

@Component({
	selector: 'app-depoimentos',
	imports: [DepoimentosCarouselComponent, TextHighlightDirective],
	hostDirectives: [InViewDirective],
	template: `
		<span class="text-2xl text-center mb-4"
			>
			Eles Confiaram no Método e<br /><span appTextHighlight class="font-bold text-amber-400">Se Surpreenderam!</span></span
		>
		<app-depoimentos-carousel />
	`,
	host: { class: 'grid mx-auto' },
	styles: `
		:host {
			opacity: 0;
			transition: opacity 2s ease-in-out;

			&.in-view {
				opacity: 1;
			}
		}
	`,
})
export class DepoimentosComponent {}
