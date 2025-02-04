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
		<div class="relative w-full max-w-sm aspect-[9/16] overflow-hidden ">
			<div
				*ngFor="let item of items; let i = index"
				[class.active]="currentIndex === i"
				[class.previous]="previousIndex === i"
				[class.next]="nextIndex === i"
				class="carousel-item"
			>
				<app-depoimentos-carousel-item [imageSrc]="item"></app-depoimentos-carousel-item>
			</div>
		</div>
		<app-carousel-button side="right" (clickEvent)="onNext()"></app-carousel-button>
	`,
	styleUrl: './depoimentos-carousel.component.scss',
	host: { class: 'flex items-center justify-center gap-4 px-8' },
})
export class DepoimentosCarouselComponent extends CarouselDirective {
	override items: string[] = [
		'images/depoimento5.jpeg',
		'images/depoimento6.jpeg',
		'images/depoimento7.jpeg',
		'images/depoimento3.jpeg',
		'images/depoimento1.jpeg',
		'images/depoimento2.jpeg',
		'images/depoimento4.jpeg',
	];
}
