<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	// Access the id parameter from the URL
	const id = $page.params.id;

	onMount(async () => {
		const publicKey = localStorage.getItem('publicKey');
		if (publicKey === null || publicKey === undefined) {
			goto('/login?from_url=/id/' + id);
		}
	});
</script>

<h1>Detail Page for ID: {id}</h1>

<p>This is the detail page for the item with ID: {id}.</p>
