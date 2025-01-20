import { Component } from '@angular/core';
import { CallActionComponent } from './features/call-action/call-action.component';
import { AutorComponent } from './features/autor/autor.component';
import { BeneficiosComponent } from './features/beneficios/beneficios.component';
import { CallActionMiniComponent } from './features/call-action-mini/call-action-mini.component';
import { DepoimentosComponent } from './features/depoimentos/depoimentos.component';
import { FaqComponent } from './features/faq/faq.component';
import { HeroComponent } from './features/hero/hero.component';

@Component({
	selector: 'app-root',
	imports: [
		HeroComponent,
		BeneficiosComponent,
		DepoimentosComponent,
		CallActionMiniComponent,
		AutorComponent,
		FaqComponent,
		CallActionComponent,
	],
	template: `
		<app-hero />
		<app-beneficios class="mb-20" />
		<app-depoimentos class="mb-20" />
		<app-call-action-mini class="mb-20" />
		<app-autor class="mb-20" />
		<app-faq class="mb-20" />
		<app-call-action />
	`,
})
export class AppComponent {}
