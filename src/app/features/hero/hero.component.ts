import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ActionButtonDirective } from '../../shared/action-button.directive';
import { TextHighlightDirective } from '../../shared/text-highlight.directive';

@Component({
	selector: 'app-hero',
	imports: [FontAwesomeModule, ActionButtonDirective, TextHighlightDirective],
	template: `
		<div class="h-full max-w-5xl mx-auto">
			<!-- Content -->
			<div
				[style.backgroundImage]="'url(images/hero.jpg)'"
				class="h-full flex flex-col justify-end p-8 bg-center bg-cover bg-no-repeat"
			>
				<span class="text-center text-7xl font-black mb-4">DESAFIO<br />30 DIAS</span>
				<span class="text-center text-2xl mb-4"
					>Transforme Seu Corpo<br />e Sua Vida em<br />Apenas <span appTextHighlight>4 SEMANAS!</span></span
				>
				<div #content class="flex flex-col justify-center gap-8">
					<a appActionButton class="">GARANTA SUA VAGA!</a>
					<fa-icon class="text-center text-4xl duration-1000 transition-all animate-jump" [icon]="arrowIcon"></fa-icon>
				</div>
			</div>
		</div>
	`,
})
export class HeroComponent implements AfterViewInit {
	@ViewChild('content') content?: ElementRef<HTMLDivElement>;
	arrowIcon = faArrowDown;

	ngAfterViewInit(): void {
		setTimeout(() => this.content?.nativeElement.click(), 0);
	}
}
