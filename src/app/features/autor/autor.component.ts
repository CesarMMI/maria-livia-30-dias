import { Component } from '@angular/core';
import { TextHighlightDirective } from '../../shared/text-highlight.directive';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselDirective } from '../../shared/carousel.directive';
import { CarouselButtonComponent } from '../../shared/carousel-button.component';
import { InViewDirective } from '../../shared/in-view.directive';

@Component({
	selector: 'app-autor',
	imports: [TextHighlightDirective, FontAwesomeModule, CarouselButtonComponent, InViewDirective],
	template: `
		<div appInView class="content grid bg-neutral-900 rounded-lg overflow-hidden mx-auto max-w-xl">
			<div class="relative aspect-square">
				@for(item of items; track $index; let i = $index){
				<div
					class="carousel-item absolute w-full h-full bg-top bg-cover bg-no-repeat"
					[class.active]="currentIndex === i"
					[class.previous]="previousIndex === i"
					[class.next]="nextIndex === i"
					[style.backgroundImage]="'url(' + item + ')'"
				></div>
				}
				<app-carousel-button
					side="left"
					class="absolute left-0 inset-y-1/2 ml-4 text-neutral-800"
					[lighter]="true"
					(clickEvent)="onPrev()"
				/>
				<app-carousel-button
					side="right"
					class="absolute right-0 inset-y-1/2 mr-4"
					[lighter]="true"
					(clickEvent)="onNext()"
				/>
			</div>
			<div class="grid p-4">
				<span class="text-2xl">Conheça a <span appTextHighlight class="teste">MARIA LIVIA</span>,</span>
				<span>Especialista por Trás do Método</span>
				<p class="text-sm text-justify text-neutral-400 mt-2 mb-6">
					Após superar desafios pessoais e conquistar resultados impressionantes, Maria Livia dedica sua vida a ajudar outras
					pessoas a transformarem suas rotinas com equilíbrio e motivação. Criadora do método do 30 dias, que já mudou
					dezenas de vidas.
				</p>
				<div class="flex items-center justify-end gap-4">
					<a class="text-xs flex gap-1" href="https://www.instagram.com/liviasouzacrz/" target="_blank">
						<fa-icon [icon]="iconInstagram" />
						<span class="text-blue-300 underline">liviasouzacrz</span>
					</a>
					<!-- <a class="text-xs flex gap-1" href="http://google.com.br" target="_blank">
						<fa-icon [icon]="iconWhatsapp" />
						<span class="text-blue-300 underline">(11) 96637-4958</span>
					</a>
					<a class="text-xs flex gap-1" href="http://google.com.br" target="_blank">
						<fa-icon [icon]="iconFacebook" />
						<span class="text-blue-300 underline">liviasouzacrz</span>
					</a> -->
				</div>
			</div>
		</div>
	`,
	host: {
		class: `
      px-8
      block
    `,
	},
	styleUrl: './autor.component.scss',
})
export class AutorComponent extends CarouselDirective {
	override items = ['images/autor3.jpg', 'images/autor4.jpeg', 'images/autor1.jpg', 'images/autor2.jpg'];
	iconInstagram = faInstagram;
	iconWhatsapp = faWhatsapp;
	iconFacebook = faFacebook;
}
