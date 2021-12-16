<script>
	import SearchBar from './SearchBar.svelte';

	export let articles;
	export let numTopics;
</script>

<table>
	<tr id="form3">
		<td class='logo'><a class='logo' href='/'><span style='color: #0050C8'>|</span>SP <span style='color: #D70000'>|</span>IT</a></td>
		<td>
			<table>
				<tr><SearchBar bind:articles /></tr>
				{#if articles}{#if numTopics !== 0}
					<tr>{numTopics} topics, {articles.length} results</tr>
				{/if}{/if}
			</table>
		</td>
		<td>Your Account Component Here!</td>
	</tr>
</table>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@600&display=swap');

		.logo {
        font-family: 'Readex Pro', sans-serif;
        font-size: 60px;
        vertical-align: text-top;
        cursor: pointer;
        color: black;
        text-decoration: none;
    }
</style>