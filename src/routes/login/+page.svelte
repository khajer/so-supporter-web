<script>
	import { goto } from '$app/navigation';
	import { wallet } from '../../stores/solana.js';
	import { writable } from 'svelte/store';
	import { get } from 'svelte/store';
	// @ts-ignore

	let connectionStatus = writable('');

	async function connectWallet() {
		try {
			// @ts-ignore
			let provider = window.solana;
			if (provider && provider.isPhantom) {
				const response = await provider.connect();
				wallet.set(response.publicKey.toString());

				connectionStatus.set('Wallet connected');
				goto('/');
			} else {
				connectionStatus.set('Phantom wallet not found');
			}
		} catch (err) {
			console.log(err);
			connectionStatus.set('Connection failed, please open phaton wallet');
		}
	}
</script>

<button on:click={connectWallet}>Connect Wallet</button>
<p>{$connectionStatus}</p>
