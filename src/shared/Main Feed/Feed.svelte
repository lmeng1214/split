<script>
	import TopicRow from './TopicRow.svelte';

	export let articles;
	export let numTopics;
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