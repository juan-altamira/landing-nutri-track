<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import AnimatedElement from '$lib/components/AnimatedElement.svelte';
</script>

<section class="bg-nutri-green-dark py-20 md:py-24">
	<div class="max-w-content mx-auto px-6 md:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<AnimatedElement>
				<h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
					Convertí tu alimentación en un plan medible y sostenible
				</h2>
			</AnimatedElement>
			
			<AnimatedElement delay={100}>
				<p class="text-xl text-white/90 mb-8 leading-relaxed">
					Pasás de comer "más o menos bien" a saber, con datos, qué estás haciendo, qué te falta y qué te está frenando.
				</p>
			</AnimatedElement>
			
			<AnimatedElement delay={200}>
				<ul class="space-y-3 mb-10 text-left max-w-xl mx-auto">
					<li class="flex items-start gap-3 text-white">
						<svg class="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>Resultados medibles en menos de 30 días</span>
					</li>
					<li class="flex items-start gap-3 text-white">
						<svg class="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>Claridad diaria sobre qué comer</span>
					</li>
					<li class="flex items-start gap-3 text-white">
						<svg class="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>Menos dudas, más energía todos los días</span>
					</li>
				</ul>
			</AnimatedElement>
			
			<AnimatedElement delay={300}>
				<Button href="https://www.nutri-track.pro" variant="white" size="lg">
					Empezar mi prueba gratuita de 14 días
				</Button>
				<p class="text-white/80 text-sm mt-4">
					Sin compromiso. Cancelás cuando quieras.
				</p>
			</AnimatedElement>
		</div>
	</div>
</section>
