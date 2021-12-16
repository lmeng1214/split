<script>
	import Article from './Article.svelte';

	export let articles;
	export let topic_id;
</script>

<tr>
	<td>
		<!-- Topic ID -->
		Row {topic_id}
	</td>
	{#each articles as article}
		{#if article.topic_id === topic_id}
			<td><Article {article} /></td>
		{/if}
	{/each}
</tr>