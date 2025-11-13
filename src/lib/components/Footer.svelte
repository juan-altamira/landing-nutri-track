<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-slate-900 dark:bg-black text-white py-12">
	<div class="max-w-content mx-auto px-6 md:px-8">
		<div class="grid md:grid-cols-3 gap-8 mb-8">
			<div>
				<h3 class="text-xl font-bold mb-4">Nutri-Track</h3>
				<p class="text-gray-400 dark:text-gray-500 text-sm">
					La primera plataforma que convierte tu alimentación en resultados medibles.
				</p>
			</div>
			
			<div>
				<h4 class="font-semibold mb-4">Enlaces</h4>
				<ul class="space-y-2 text-sm">
					<li><a href="#features" class="text-gray-400 hover:text-white transition-colors">Funciones</a></li>
					<li><a href="#pricing" class="text-gray-400 hover:text-white transition-colors">Precios</a></li>
					<li><a href="#faq" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
				</ul>
			</div>
			
			<div>
				<h4 class="font-semibold mb-4">Soporte</h4>
				<ul class="space-y-2 text-sm">
					<li><a href="mailto:soporte@nutri-track.pro" class="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
					<li><a href="/terminos" class="text-gray-400 hover:text-white transition-colors">Términos y condiciones</a></li>
					<li><a href="/privacidad" class="text-gray-400 hover:text-white transition-colors">Política de privacidad</a></li>
				</ul>
			</div>
		</div>
		
		<div class="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
			<p>&copy; {currentYear} Nutri-Track. Todos los derechos reservados.</p>
		</div>
	</div>
</footer>
