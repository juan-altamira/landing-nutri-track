<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import AnimatedElement from '$lib/components/AnimatedElement.svelte';
	
	let openIndex = $state<number | null>(null);
	
	const objections = [
		{
			question: 'No tengo tiempo para cargar todo lo que como.',
			answer: `Nutri-Track está pensado justamente para quienes no tienen tiempo.

Podés:
• Guardar tus comidas frecuentes y repetirlas con un toque
• Duplicar días completos cuando comés parecido
• Registrar un plato completo en segundos, sin pesar cada gramo

En la práctica, la mayoría de usuarios tarda menos de 5 minutos al día en registrar lo justo y necesario.

Es mucho menos tiempo del que se pierde pensando "¿estaré comiendo bien?".`
		},
		{
			question: 'Ahora no estoy como para gastar USD 9,90 / ARS 9.900 por mes.',
			answer: `Nutri-Track cuesta menos que:
• Un delivery "más o menos sano" en la semana
• Un par de snacks que terminan sumando calorías vacías

La diferencia es que esos gastos se van en el momento. Acá estás invirtiendo en entender tu alimentación y mejorar energía, rendimiento y salud.

Si en 14 días no sentís ninguna mejora real, te devolvemos el 100% y te quedás con los bonos.

No hay forma más barata de comprobar si te sirve.`
		},
		{
			question: 'No le veo utilidad concreta, ¿qué cambia en mi día a día?',
			answer: `Nutri-Track no es "otra app de calorías". Cambia tres cosas muy concretas:

1. Te dice qué estás haciendo bien y qué te está frenando
2. Te marca qué nutrientes te faltan o te sobran (no solo calorías)
3. Te muestra tendencias: por qué te sentís como te sentís (energía, antojos, sueño, rendimiento)

Cada día terminás con una idea clara de qué ajustar mañana, en vez de seguir adivinando.`
		},
		{
			question: 'No creo que funcione en mi caso, ya probé otras apps y las dejé.',
			answer: `Es normal: muchas apps se quedan en "anotá todo y arreglate".

Nutri-Track suma 3 cosas que cambian el juego:
• Alertas inteligentes: no solo guarda datos, te avisa cuando detecta patrones que te afectan
• Reportes semanales y mensuales: ves si tus esfuerzos se están traduciendo en algo o no
• Soporte humano: podés traer tus dudas a sesiones grupales y ajustar con criterio, no solo con números

Si ya probaste otras y las dejaste, Nutri-Track puede ser la primera que te devuelve algo a cambio del esfuerzo.`
		},
		{
			question: 'No soy deportista profesional, ¿vale la pena igual?',
			answer: `Sí. Nutri-Track no es solo para atletas:
• Si querés tener más energía para tu día normal
• Si querés bajar grasa sin hacer locuras
• Si querés ordenar tu alimentación por salud

La diferencia entre "comer más o menos bien" y comer con criterio no es solo estética: es rendimiento en el trabajo, en el entrenamiento y en cómo te sentís todos los días.`
		},
		{
			question: 'Me conozco: empiezo motivado y a la semana lo dejo.',
			answer: `Por eso Nutri-Track no se apoya en motivación, sino en sistema:
• Registro rápido, sin fricción
• Recordatorios justos, no invasivos
• Progreso visible: ves cómo se acumulan días buenos, no solo "rayitas verdes"

Además, no firmás contrato de por vida. Probás, ves si encaja con tu rutina y, si no, cancelás con un clic.`
		},
		{
			question: 'No quiero obsesionarme con la comida.',
			answer: `El objetivo es exactamente el contrario.

Nutri-Track existe para que pienses menos y decidas mejor:
• Un rato corto al día para registrar
• Información clara para saber si vas bien
• Luego, te olvidás y seguís con tu vida

Obsesión es pensar todo el día "¿estaré comiendo bien?".
Tranquilidad es saberlo con datos y dejar de darle vueltas.`
		}
	];
	
	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<Section>
	<AnimatedElement>
		<h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-4">
			Objeciones comunes
		</h2>
		<p class="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
			Lo que probablemente estás pensando
		</p>
	</AnimatedElement>
	
	<div class="max-w-3xl mx-auto space-y-4">
		{#each objections as objection, i}
			<AnimatedElement delay={i * 50}>
				<div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
					<button
						onclick={() => toggle(i)}
						class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
					>
						<span class="font-semibold text-slate-900 dark:text-white pr-4">
							{objection.question}
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
						<div class="px-6 pb-5 text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
							{objection.answer}
						</div>
					{/if}
				</div>
			</AnimatedElement>
		{/each}
	</div>
	
	<AnimatedElement delay={400}>
		<p class="text-center text-gray-600 dark:text-gray-400 mt-12 max-w-2xl mx-auto">
			Si alguna de estas dudas te representa, Nutri-Track está diseñado justamente para vos: personas ocupadas, que no quieren volverse fanáticas de la comida, pero sí quieren resultados claros.
		</p>
	</AnimatedElement>
</Section>
