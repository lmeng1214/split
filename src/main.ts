import App from './App.svelte';
import Search from './Search.svelte';

const app = new Search({
	target: document.body,
	props: {
		name: ''
	}
});

export default app;