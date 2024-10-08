<script>
	import { onMount } from 'svelte';
	import { wallet } from '../stores/solana.js';
	import { get } from 'svelte/store';

	onMount(async () => {
		const storedWallet = get(wallet);
		console.log(wallet);
		console.log(storedWallet);

		if (!storedWallet) {
			// window.location.href = '/login'; // Redirect to login page
		}
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>5555 5555 5555</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
