import { Component } from '@angular/core';
import { ActionButtonDirective } from '../../shared/action-button.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { TextHighlightDirective } from '../../shared/text-highlight.directive';
import { InViewDirective } from '../../shared/in-view.directive';

@Component({
	selector: 'app-hero',
	imports: [FontAwesomeModule, ActionButtonDirective, TextHighlightDirective, InViewDirective],
	template: `
		<!-- Background -->
		<div
			[style.backgroundImage]="'url(images/hero.jpg)'"
			class="absolute w-full h-screen bg-center bg-cover bg-no-repeat -z-10"
		></div>
		<div class="absolute w-full h-screen bg-gradient-to-t from-neutral-950 from-40% to-transparent -z-10"></div>
		<!-- Content -->
		<div appInView class="content absolute bottom-0 w-full h-2/3 mt-auto flex flex-col p-8">
			<span class="text-center text-7xl font-black mb-4">DESAFIO<br />30 DIAS</span>
			<span class="text-center text-2xl"
				>Transforme Seu Corpo<br />e Sua Vida em<br />Apenas <span appTextHighlight>4 SEMANAS!</span></span
			>
			<div class="my-auto flex flex-col justify-center gap-8">
				<a appActionButton class="">GARANTA SUA VAGA!</a>
				<fa-icon class="text-center text-5xl duration-1000 transition-all animate-jump" [icon]="arrowIcon"></fa-icon>
			</div>
		</div>
	`,
	host: {
		class: `
      		block
      		w-full
      		h-screen
      		relative
			max-w-5xl
			mx-auto
    `,
	},
	styles: `
		.content{
			opacity: 0;
			transition: opacity 2s ease-in-out;

			&.in-view {
				opacity: 1;
			}
		}
	`,
})
export class HeroComponent {
	arrowIcon = faArrowDown;
}
