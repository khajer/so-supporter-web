<script>
	import { goto } from '$app/navigation';
	// @ts-ignore
	// @ts-ignore
	import { page } from '$app/stores';

	import { onMount } from 'svelte';

	let title = '';
	let image = '';
	let description = '';
	let id = '';
	let file = null;

	onMount(async () => {
		const publicKey = localStorage.getItem('publicKey');
		if (publicKey === null || publicKey === undefined) {
			goto('/login?from_url=/profile');
		}
	});
	// @ts-ignore
	const handleSubmit = async (event) => {
		event.preventDefault();
		// @ts-ignore
		const data = { title, image, id };

		try {
			// const response = await fetch('/api/save-data', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json'
			// 	},
			// 	body: JSON.stringify(data)
			// });
			// if (response.ok) {
			// 	alert('Data saved successfully!');
			// } else {
			// 	alert('Failed to save data.');
			// }
		} catch (error) {
			// console.error('Error:', error);
			// alert('An error occurred while saving data.');
		}
	};
	// @ts-ignore
	const handleFileChange = (event) => {
		file = event.target.files[0];
	};

	const uploadFile = async () => {};
</script>

<div>
	<div>create you profile</div>
	<form on:submit={handleSubmit}>
		<div>
			<label for="title">Title:</label>
			<input type="text" id="title" bind:value={title} required />
		</div>
		<div>
			<label for="image">Image URL:</label>
			<input type="url" id="image" bind:value={image} required readonly />
			<input type="file" id="file" class="file-input" on:change={handleFileChange} />
			<button type="button" class="upload-button" on:click={uploadFile}>Upload File</button>
		</div>
		<!-- <div>
			<label for="id">ID:</label>
			<input type="text" id="id" bind:value={id} required />
		</div> -->
		<div>
			<label for="description">Description:</label>
			<textarea id="description" bind:value={description} required />
		</div>
		<div>
			<button type="submit">Save</button>
		</div>
	</form>
</div>

<style>
	form {
		max-width: 400px;
		margin: 0 auto;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 8px;
		background-color: #f9f9f9;
	}

	div {
		margin-bottom: 15px;
	}

	label {
		display: block;
		margin-bottom: 5px;
		font-weight: bold;
	}

	input[type='text'],
	input[type='url'],
	textarea {
		width: 100%;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
	}

	textarea {
		resize: vertical;
		min-height: 100px;
	}

	button {
		padding: 10px 15px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}
</style>
