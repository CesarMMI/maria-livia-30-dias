import { animate, style, transition, trigger } from '@angular/animations';

export const slideAnimation = trigger('slide', [
	transition('hidden => left', [
		style({ transform: 'translateX(-100%)', opacity: 0 }),
		animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
	]),
	transition('hidden => right', [
		style({ transform: 'translateX(100%)', opacity: 0 }),
		animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
	]),
	transition('center => left', [
		style({ transform: 'translateX(0)', opacity: 1 }),
		animate('300ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 })),
	]),
	transition('center => right', [
		style({ transform: 'translateX(0)', opacity: 1 }),
		animate('300ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 })),
	]),
]);
