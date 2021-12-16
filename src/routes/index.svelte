<script lang="ts">

	// import axios from 'axios';
	import {session} from "$app/stores";

	import DisplayComponents from '../shared/Main/DisplayComponents.svelte';
	import NavBar from '../shared/NavBar.svelte';

	let articles;

	// axios.get("http://localhost:8080/").then(function (res) {
	// 	console.log("INDEX >> Get Articles");
	// 	articles = res.data;
	// })

	async function getUser() {
		const res = await fetch('http://localhost:8080/user');

		if(res.ok && res.status === 200) {
			const userData = await res.json();
			console.log(userData)

			console.log( { userData });

			$session = {
				loggedIn: true,
				userData: userData
			};

		} else {
			$session = {
				loggedIn: false
			};
		}
	}


</script>


{#await getUser() }
	Loading..
{:then _ }
<main>
	<NavBar />
	<table>
		<DisplayComponents {articles} />
	</table>
</main>
{:catch e}
{e}
{/await}

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