<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<svelte:head>
	<title>Nutri-Track - Convierte tu alimentación en resultados medibles</title>
</svelte:head>

{@render children()}
