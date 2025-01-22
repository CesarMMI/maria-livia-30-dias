import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAppleWhole, faDumbbell, faPeopleGroup, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { InViewDirective } from '../../shared/in-view.directive';
import { BeneficiosSectionComponent } from './beneficios-section.component';

@Component({
	selector: 'app-beneficios',
	imports: [BeneficiosSectionComponent, InViewDirective],
	template: `
		@for (section of sections; track $index; let e=$even) {
		<div appInView class="container overflow-hidden" [class.bg-neutral-900]="!e">
			<app-beneficios-section
				[justify]="section.justify"
				[icone]="section.icone"
				[titulo]="section.titulo"
				[descricao]="section.descricao"
			/>
		</div>
		}
	`,
	host: { class: 'grid' },
	styles: `
	.container {
		app-beneficios-section {
			transition: transform 1s ease-in-out;
		}
		&:nth-child(even) {
			app-beneficios-section {
				transform: translateX(-100%);
			}	
		}

		&:nth-child(odd) {
			app-beneficios-section {
				transform: translateX(100%);
			}	
		}

		&.in-view{
			app-beneficios-section{
				transform: translateX(0%);
			}
		}
	}
		`,
})
export class BeneficiosComponent {
	sections: { justify?: 'start' | 'end'; icone: IconProp; titulo: string; descricao: string }[] = [
		{
			icone: faAppleWhole,
			titulo: 'Transforme sua Alimentação',
			descricao: 'Melhore sua alimentação com dicas práticas e uma nova receita semanal para inspirar suas refeições.',
		},
		{
			justify: 'end',
			icone: faDumbbell,
			titulo: 'Treinos que Evoluem com Você',
			descricao: 'Do iniciante ao avançado, cada exercício é feito no seu ritmo.',
		},
		{
			icone: faPeopleGroup,
			titulo: 'Você Nunca Está Sozinho',
			descricao: 'Tenha acesso direto e tire dúvidas com a maria livia.',
		},
		{
			justify: 'end',
			icone: faSeedling,
			titulo: 'Resultados Reais e Duradouros',
			descricao: 'Emagreça com saúde e mantenha os resultados sem sacrifícios.',
		},
	];
}
