import { Component } from '@angular/core';
import { ActionButtonDirective } from '../../shared/action-button.directive';
import { TextHighlightDirective } from '../../shared/text-highlight.directive';
import { InViewDirective } from '../../shared/in-view.directive';

@Component({
	selector: 'app-call-action-mini',
	imports: [ActionButtonDirective, TextHighlightDirective],
	hostDirectives: [InViewDirective],
	template: `
		<div class="content grid gap-4 p-8 bg-neutral-900 max-w-5xl mx-auto">
			<span class="text-center">NÃO ADIE O FUTURO QUE <span class="font-bold">VOCÊ MERECE!</span></span>
			<div class="grid gap-1">
				<span class="text-center text-sm"
					>De <span class="text-base font-semibold line-through">R$ 150,00</span> por apenas</span
				>
				<span appTextHighlight class="text-center text-7xl">R$ 69,99</span>
			</div>
			<a class="mt-4" appActionButton>COMECE SUA JORNADA!</a>
		</div>
	`,
	host: { class: 'block bg-neutral-900' },
	styles: `
		:host {
			.content {
				transform: translateX(-100%);
				transition: transform 1s ease-in-out;
			}
			
			&.in-view {
				.content {
					transform: translateX(0%);
				}
			}
		}
	`,
})
export class CallActionMiniComponent {}
