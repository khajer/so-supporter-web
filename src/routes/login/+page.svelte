<script>
	import { wallet } from '../../stores/solana.js';
	import { writable } from 'svelte/store';
	import { get } from 'svelte/store';

	let connectionStatus = writable('');

	async function connectWallet() {
		try {
			if (window.solana && window.solana.isPhantom) {
				const response = await window.solana.connect();

				wallet.set(response.publicKey.toString());

				const storedWallet = get(wallet);
				// console.log(storedWallet);

				connectionStatus.set('Wallet connected');
				// window.location.href = '/your-protected-page'; // Redirect to your protected page
				// window.location.href = '/';
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
