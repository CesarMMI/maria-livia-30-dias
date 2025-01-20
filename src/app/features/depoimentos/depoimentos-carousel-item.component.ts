import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-depoimentos-carousel-item',
	template: `
		<div class="flex-1 bg-center bg-cover bg-no-repeat" [style.backgroundImage]="'url(' + imageSrc + ')'"></div>
		<div class="p-4 flex flex-col gap-2">
			<div>
				<span class="text-2xl font-bold">{{ nome }}</span>
				<span>, {{ idade }} anos</span>
			</div>
			<span class="flex-1">"{{ depoimento }}"</span>
		</div>
	`,
	host: {
		class: `
		h-full
		flex
		flex-col		
		rounded-lg
		bg-neutral-900
		overflow-hidden
	  `,
	},
})
export class DepoimentosCarouselItemComponent {
	@Input({ required: true }) imageSrc!: string;
	@Input({ required: true }) nome!: string;
	@Input({ required: true }) idade!: number;
	@Input({ required: true }) depoimento!: string;
}
