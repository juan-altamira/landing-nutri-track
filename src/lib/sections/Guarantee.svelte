<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import AnimatedElement from '$lib/components/AnimatedElement.svelte';
</script>

<Section class="bg-blue-50 dark:bg-gray-800">
	<AnimatedElement>
		<div class="max-w-3xl mx-auto text-center">
			<div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
				<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
				</svg>
			</div>
			
			<h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
				Garantía 14 días, 100% de devolución
			</h2>
			
			<div class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
				<p>
					Probá Nutri-Track durante <span class="font-semibold text-slate-900 dark:text-white">14 días</span>.
				</p>
				
				<p>
					Si no sentís una mejora real en:
				</p>
				<ul class="text-left max-w-xl mx-auto space-y-2">
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 text-nutri-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
						</svg>
						Tu claridad sobre qué comer
					</li>
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 text-nutri-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
						</svg>
						Tu energía diaria
					</li>
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 text-nutri-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
						</svg>
						Tu sensación de control sobre la alimentación
					</li>
				</ul>
				
				<p class="font-bold text-slate-900 dark:text-white">
					Te devolvemos el 100% de tu dinero, sin preguntas.
				</p>
				
				<p class="text-base text-gray-600 dark:text-gray-400">
					Y los bonos quedan para vos como agradecimiento por haber probado la plataforma.
				</p>
			</div>
		</div>
	</AnimatedElement>
</Section>
