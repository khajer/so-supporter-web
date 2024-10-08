<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import { wallet } from '../../../stores/solana.js';
	import { onMount } from 'svelte';
	// Access the id parameter from the URL
	const id = $page.params.id;

	onMount(async () => {
		const storedWallet = get(wallet);
		if (!storedWallet) {
			goto('/login?from_url=/id/' + id);
		}
	});
</script>

<h1>Detail Page for ID: {id}</h1>

<p>This is the detail page for the item with ID: {id}.</p>
