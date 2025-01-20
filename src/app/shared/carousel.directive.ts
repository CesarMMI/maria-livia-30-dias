import { Directive } from '@angular/core';

@Directive({
	selector: '[appCarousel]',
})
export abstract class CarouselDirective {
	abstract items: any[];

	currentIndex = 1;
	previousIndex = 0;
	nextIndex = 2;

	onNext() {
		this.currentIndex = this.getNextIndex(this.currentIndex);
		this.nextIndex = this.getNextIndex(this.currentIndex);
		this.previousIndex = this.getPreviousIndex(this.currentIndex);
	}

	onPrev() {
		this.currentIndex = this.getPreviousIndex(this.currentIndex);
		this.nextIndex = this.getNextIndex(this.currentIndex);
		this.previousIndex = this.getPreviousIndex(this.currentIndex);
	}

	private getNextIndex(index: number) {
		if (index < this.items.length - 1) return index + 1;
		return 0;
	}

	private getPreviousIndex(index: number) {
		if (index > 0) return index - 1;
		return this.items.length - 1;
	}
}
