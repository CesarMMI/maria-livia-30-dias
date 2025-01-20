import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselButtonComponent } from '../../shared/carousel-button.component';
import { CarouselDirective } from '../../shared/carousel.directive';
import { DepoimentosCarouselItemComponent } from './depoimentos-carousel-item.component';

@Component({
	selector: 'app-depoimentos-carousel',
	imports: [CarouselButtonComponent, DepoimentosCarouselItemComponent, NgFor],
	template: `
		<app-carousel-button side="left" (clickEvent)="onPrev()"></app-carousel-button>
		<div class="relative w-full aspect-[3/4] overflow-hidden mx-auto max-w-xl">
			<div
				*ngFor="let item of items; let i = index"
				[class.active]="currentIndex === i"
				[class.previous]="previousIndex === i"
				[class.next]="nextIndex === i"
				class="carousel-item"
			>
				<app-depoimentos-carousel-item
					[idade]="item.idade"
					[nome]="item.nome"
					[imageSrc]="item.imageSrc"
					[depoimento]="item.depoimento"
				></app-depoimentos-carousel-item>
			</div>
		</div>
		<app-carousel-button side="right" (clickEvent)="onNext()"></app-carousel-button>
	`,
	styleUrl: './depoimentos-carousel.component.scss',
	host: { class: 'flex items-center justify-center gap-4 px-8' },
})
export class DepoimentosCarouselComponent extends CarouselDirective {
	override items: { imageSrc: string; nome: string; idade: number; depoimento: string }[] = [
		{
			idade: 34,
			nome: 'Jorge',
			imageSrc: 'images/depoimento.webp',
			depoimento: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			idade: 17,
			nome: 'Cleiton',
			imageSrc: 'images/depoimento3.jpg',
			depoimento: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			idade: 26,
			nome: 'Aline',
			imageSrc: 'images/depoimento2.webp',
			depoimento: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
	];
}
