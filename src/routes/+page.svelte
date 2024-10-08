<script>
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { wallet } from '../stores/solana.js';
	import { goto } from '$app/navigation';

	onMount(async () => {
		const storedWallet = get(wallet);
		if (!storedWallet) {
			goto('/login');
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
