import { Directive } from '@angular/core';

@Directive({
	selector: '[appTextHighlight]',
	host: { class: 'text-amber-400 font-bold' },
})
export class TextHighlightDirective {}
