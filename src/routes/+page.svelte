<script lang="ts">
	import Hero from '$lib/sections/Hero.svelte';
	import SocialProof from '$lib/sections/SocialProof.svelte';
	import Problem from '$lib/sections/Problem.svelte';
	import Future from '$lib/sections/Future.svelte';
	import Solution from '$lib/sections/Solution.svelte';
	import Features from '$lib/sections/Features.svelte';
	import Bonuses from '$lib/sections/Bonuses.svelte';
	import Testimonials from '$lib/sections/Testimonials.svelte';
	import Pricing from '$lib/sections/Pricing.svelte';
	import Guarantee from '$lib/sections/Guarantee.svelte';
	import Objections from '$lib/sections/Objections.svelte';
	import FAQ from '$lib/sections/FAQ.svelte';
	import FinalCTA from '$lib/sections/FinalCTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<div class="overflow-x-hidden">
	<ThemeToggle />
	<Hero />
	<SocialProof />
	<Problem />
	<Future />
	<Solution />
	<div id="features">
		<Features />
	</div>
	<Bonuses />
	<Testimonials />
	<div id="pricing">
		<Pricing />
	</div>
	<Guarantee />
	<Objections />
	<div id="faq">
		<FAQ />
	</div>
	<FinalCTA />
	<Footer />
</div>
