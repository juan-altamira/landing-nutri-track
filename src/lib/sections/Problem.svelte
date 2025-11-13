<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import AnimatedElement from '$lib/components/AnimatedElement.svelte';
</script>

<Section>
	<div class="max-w-2xl mx-auto text-center">
		<AnimatedElement>
			<h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">
				Sabés que la alimentación importa, pero el día a día se ve así
			</h2>
		</AnimatedElement>
		
		<div class="space-y-6 mb-10">
			<AnimatedElement delay={100}>
				<div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-left border border-gray-200 dark:border-gray-700">
					<div class="flex gap-4">
						<div class="flex-shrink-0">
							<svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"/>
							</svg>
						</div>
						<p class="text-gray-700 dark:text-gray-300 text-lg">
							"Sé qué debería comer, pero termino improvisando."
						</p>
					</div>
				</div>
			</AnimatedElement>
			
			<AnimatedElement delay={200}>
				<div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-left border border-gray-200 dark:border-gray-700">
					<div class="flex gap-4">
						<div class="flex-shrink-0">
							<svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"/>
							</svg>
						</div>
						<p class="text-gray-700 dark:text-gray-300 text-lg">
							"Mis progresos se estancan y no entiendo qué me falta o qué sobra."
						</p>
					</div>
				</div>
			</AnimatedElement>
			
			<AnimatedElement delay={300}>
				<div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-left border border-gray-200 dark:border-gray-700">
					<div class="flex gap-4">
						<div class="flex-shrink-0">
							<svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"/>
							</svg>
						</div>
						<p class="text-gray-700 dark:text-gray-300 text-lg">
							"Intento ser constante, pero pierdo motivación porque no veo avances claros."
						</p>
					</div>
				</div>
			</AnimatedElement>
		</div>
		
		<AnimatedElement delay={400}>
			<p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
				Planillas, notas en el celular, apps incompletas: <span class="font-semibold text-gray-900 dark:text-white">muchos datos sueltos, pocas decisiones concretas.</span>
			</p>
		</AnimatedElement>
	</div>
</Section>
