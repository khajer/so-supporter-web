<script>
	import { page } from '$app/stores';

	// Access the id parameter from the URL
	const id = $page.params.id;
</script>

<h1>Detail Page for ID: {id}</h1>

<p>This is the detail page for the item with ID: {id}.</p>
