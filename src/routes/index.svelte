<script lang="ts">
	import NavBar from '../shared/NavBar.svelte';
	import Feed from '../shared/Main Feed/Feed.svelte';
	import axios from 'axios';

	let articles;

	let numTopics = 0;

	$: axios.get('http://localhost:8080/numTopics')
		.then(function (res) {
			numTopics = res.data.rows[0].count;
			console.log(numTopics);
		})

</script>

<main>
	<NavBar bind:articles bind:numTopics/>
	<Feed bind:articles bind:numTopics />
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