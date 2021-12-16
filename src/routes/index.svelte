<script lang="ts">
	import NavBar from '../shared/NavBar.svelte';
	import Feed from '../shared/Main Feed/Feed.svelte';

	let articles;
</script>

<main>
	<NavBar bind:articles />
	<Feed bind:articles />
</main>

<style>
	main {
		text-align: center;
		max-width: 240px;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>