<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import AnimatedElement from '$lib/components/AnimatedElement.svelte';
</script>

<Section bg="green">
	<div class="grid md:grid-cols-2 gap-12 items-center">
		<AnimatedElement>
			<h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
				Imaginá esto
			</h2>
			
			<ul class="space-y-4">
				<li class="flex gap-3">
					<svg class="w-6 h-6 text-nutri-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
					</svg>
					<p class="text-gray-700 dark:text-gray-300 text-lg">
						Mirar tu día y saber con precisión qué comer ahora para tener energía estable todo el día.
					</p>
				</li>
				<li class="flex gap-3">
					<svg class="w-6 h-6 text-nutri-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
					</svg>
					<p class="text-gray-700 dark:text-gray-300 text-lg">
						Entrenar sintiendo que tu nutrición acompaña, no que vas a media máquina.
					</p>
				</li>
				<li class="flex gap-3">
					<svg class="w-6 h-6 text-nutri-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
					</svg>
					<p class="text-gray-700 dark:text-gray-300 text-lg">
						Dormir mejor, levantarte con más claridad y ver cómo tu cuerpo responde semana a semana.
					</p>
				</li>
				<li class="flex gap-3">
					<svg class="w-6 h-6 text-nutri-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
					</svg>
					<p class="text-gray-700 dark:text-gray-300 text-lg">
						Tener tus nutrientes bajo control: proteínas, carbohidratos, grasas, vitaminas, minerales… todo alineado con tu objetivo.
					</p>
				</li>
			</ul>
			
			<p class="text-xl font-semibold text-slate-900 dark:text-white mt-8">
				Eso es lo que Nutri-Track organiza por vos.
			</p>
		</AnimatedElement>
		
		<AnimatedElement delay={200}>
			<div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
				<div class="space-y-6">
					<div class="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
						<span class="text-sm text-gray-500 dark:text-gray-400">ANTES</span>
						<span class="text-sm text-gray-500 dark:text-gray-400">DESPUÉS</span>
					</div>
					
					<div class="grid grid-cols-2 gap-4">
						<div class="space-y-2">
							<div class="bg-red-50 text-red-700 dark:text-red-600 text-xs p-2 rounded">Apps dispersas</div>
							<div class="bg-red-50 text-red-700 dark:text-red-600 text-xs p-2 rounded">Sin claridad</div>
							<div class="bg-red-50 text-red-700 dark:text-red-600 text-xs p-2 rounded">Cansancio</div>
						</div>
						<div class="space-y-2">
							<div class="bg-green-50 text-nutri-green-darker dark:bg-green-900 dark:text-nutri-green text-xs p-2 rounded">Todo en un lugar</div>
							<div class="bg-green-50 text-nutri-green-darker dark:bg-green-900 dark:text-nutri-green text-xs p-2 rounded">100% claridad</div>
							<div class="bg-green-50 text-nutri-green-darker dark:bg-green-900 dark:text-nutri-green text-xs p-2 rounded">Energía estable</div>
						</div>
					</div>
				</div>
			</div>
		</AnimatedElement>
	</div>
</Section>
