<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import AnimatedElement from '$lib/components/AnimatedElement.svelte';
	
	let openIndex = $state<number | null>(null);
	
	const faqs = [
		{
			question: '¿Necesito saber de nutrición?',
			answer: 'No. Nutri-Track traduce los datos en acciones simples: te dice qué estás cumpliendo, qué falta y qué conviene ajustar hoy.'
		},
		{
			question: '¿Funciona si hago dieta vegana, keto o sin gluten?',
			answer: 'Sí. Podés configurar tus restricciones y preferencias, y la plataforma ajusta objetivos, alertas y sugerencias.'
		},
		{
			question: '¿Puedo usarlo con pacientes o clientes?',
			answer: 'Sí. Nutri-Track incluye funciones para profesionales: seguimiento multiusuario, reportes personalizados y evolución comparada.'
		},
		{
			question: '¿Necesito dispositivos externos?',
			answer: 'No. Podés usar Nutri-Track solo con tu celular o computadora. La sincronización con otras apps de salud es opcional.'
		},
		{
			question: '¿Puedo cancelar cuando quiera?',
			answer: 'Sí. Desde tu panel, con un solo clic. Sin llamadas, sin explicaciones.'
		}
	];
	
	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<Section bg="gray">
	<AnimatedElement>
		<h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12">
			Preguntas frecuentes
		</h2>
	</AnimatedElement>
	
	<div class="max-w-3xl mx-auto space-y-3">
		{#each faqs as faq, i}
			<AnimatedElement delay={i * 50}>
				<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
					<button
						onclick={() => toggle(i)}
						class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
					>
						<span class="font-semibold text-slate-900 dark:text-white pr-4">
							{faq.question}
						</span>
						<svg
							class="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300"
							class:rotate-180={openIndex === i}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
						</svg>
					</button>
					
					{#if openIndex === i}
						<div class="px-6 pb-4 text-gray-700 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700 pt-3">
							{faq.answer}
						</div>
					{/if}
				</div>
			</AnimatedElement>
		{/each}
	</div>
</Section>
