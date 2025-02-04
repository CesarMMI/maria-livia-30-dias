import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appInView]',
})
export class InViewDirective {
	constructor(private el: ElementRef, private renderer: Renderer2) {}

	ngOnInit() {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					this.renderer.addClass(this.el.nativeElement, 'in-view');
				}
			},
			{
				threshold: 0.2,
			}
		);

		observer.observe(this.el.nativeElement);
	}
}
