<script>
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { wallet } from '../stores/solana.js';
	import { goto } from '$app/navigation';
	import Card from './Card.svelte';

	onMount(async () => {
		const storedWallet = get(wallet);
		if (!storedWallet) {
			goto('/login');
		}
	});

	const data = [
		{ name: 'test1', image: 'https://via.placeholder.com/300', id: '1' },
		{ name: 'test3', image: 'https://via.placeholder.com/300', id: '2' },
		{ name: 'testr', image: 'https://via.placeholder.com/300', id: '3' },
		{ name: 'test3', image: 'https://via.placeholder.com/300', id: '4' },
		{ name: '3', image: 'https://via.placeholder.com/300', id: '5' },
		{ name: '4', image: 'https://via.placeholder.com/300', id: '6' },
		{ name: '3', image: 'https://via.placeholder.com/300', id: '7' },
		{ name: '4', image: 'https://via.placeholder.com/300', id: '8' },
		{ name: '32', image: 'https://via.placeholder.com/300', id: '9' }
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	5555 5555 5555
	<div class="cards-container">
		{#each data as item}
			<Card title={item.name} image={item.image} key={item.id} href="/id/{item.id}" />
		{/each}
	</div>
</section>

<style>
	.cards-container {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		justify-content: center;
		padding: 20px;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
