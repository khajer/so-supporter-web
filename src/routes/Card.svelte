<script>
	export let title = '';
	export let image = '';
	export let href = '';
	export let key = '';
</script>

<a {href} class="card">
	<div class="card">
		<img src={image} alt={title} class="card-image" />
		<h2 class="card-title">{title}</h2>
	</div>
</a>

<style>
	.card {
		border: 1px solid #ccc;
		border-radius: 8px;
		overflow: hidden;
		width: 300px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s;
	}

	.card:hover {
		transform: scale(1.05);
	}

	.card-image {
		width: 100%;
		height: auto;
		display: block;
	}

	.card-title {
		padding: 16px;
		font-size: 1.25rem;
		text-align: center;
		color: #333;
	}
</style>
