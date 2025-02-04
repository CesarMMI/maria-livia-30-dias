import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ActionButtonDirective } from '../../shared/action-button.directive';
import { TextHighlightDirective } from '../../shared/text-highlight.directive';

@Component({
	selector: 'app-hero',
	imports: [FontAwesomeModule, ActionButtonDirective, TextHighlightDirective],
	template: `
		<div class="cont">
			<!-- Content -->
			<div class="hero">
				<span class="title">DESAFIO<br />30 DIAS</span>
				<span class="subtitle"
					>Transforme Seu Corpo<br />e Sua Vida em<br />Apenas <span appTextHighlight>4 SEMANAS!</span></span
				>
				<div #content class="content">
					<a appActionButton>GARANTA SUA VAGA!</a>
					<fa-icon class="icon" [icon]="arrowIcon"></fa-icon>
				</div>
			</div>
		</div>
	`,
	styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit {
	@ViewChild('content') content?: ElementRef<HTMLDivElement>;
	arrowIcon = faArrowDown;

	ngAfterViewInit(): void {
		setTimeout(() => this.content?.nativeElement.click(), 0);
	}
}
