<script>
	import axios from 'axios';

	import TopicRow from './TopicRow.svelte';

	export let articles;

	let numTopics = 0;

	$: axios.get('http://localhost:8080/numTopics')
		.then(function (res) {
			numTopics = res.data.rows[0].count;
			console.log(numTopics);
	})

</script>

{#if articles}
	{#if numTopics !== 0}
		{#each Array(parseInt(numTopics)) as _, topic_id}
			<TopicRow {articles} {topic_id} />
		{/each}
	{/if}
{:else}
	<h1>Loading...</h1>
{/if}