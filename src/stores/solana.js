// src/stores/solana.js
import { writable } from 'svelte/store';
import { Connection, clusterApiUrl } from '@solana/web3.js';

export const connection = new Connection(clusterApiUrl('devnet'));
export const wallet = writable(null);