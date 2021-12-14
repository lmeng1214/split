<script>
	import TopicRow from './TopicRow.svelte';

	export let articles;
</script>

{#if articles}
	{#each Array(Math.floor(articles.length / 3)) as _, topic_id}
		<TopicRow {articles} {topic_id} />
	{/each}
{:else}
	<h1>Loading...</h1>
{/if}