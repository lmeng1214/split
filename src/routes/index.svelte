<script lang="ts">
	import axios from 'axios';

	import DisplayComponents from '../shared/Main/DisplayComponents.svelte';
	import NavBar from '../shared/NavBar.svelte';

	let articles;

	axios.get("http://localhost:8080/").then(function (res) {
		console.log("INDEX >> Get Articles");
		articles = res.data;
	})
</script>

<main>
	<NavBar />
	<table>
		<DisplayComponents {articles} />
	</table>
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