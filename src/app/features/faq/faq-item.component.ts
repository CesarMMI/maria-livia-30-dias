import { Component, HostListener, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-faq-item',
	imports: [FontAwesomeModule],
	template: `
		<div class="flex items-start gap-2 cursor-pointer">
			<fa-icon class="inline" [icon]="iconChevron" [class.active]="opened" />
			<span>{{ question }}</span>
		</div>
		<div class="item" [class.active]="opened">
			<p class="text-neutral-400 mt-2">{{ answer }}</p>
		</div>
	`,
	host: {
		class: `
    p-4
    grid
    rounded-lg
    bg-neutral-900
    `,
	},
	styleUrl: './faq-item.component.scss',
})
export class FaqItemComponent {
	@Input({ required: true }) question!: string;
	@Input({ required: true }) answer!: string;

	opened = false;
	iconChevron = faChevronDown;

	@HostListener('click') onClick() {
		this.opened = !this.opened;
	}
}
