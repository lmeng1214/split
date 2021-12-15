<script lang="ts">
	import axios from 'axios';

	import NavBar from '../shared/NavBar.svelte';
	import Feed from '../shared/Main Feed/Feed.svelte';

	let articles;

	axios.get("http://localhost:8080/").then(function (res) {
		console.log("INDEX >> Get Articles");
		articles = res.data;
		console.log(articles)
	})
</script>

<main>
	<NavBar bind:articles={articles} />
	<Feed {articles}/>
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