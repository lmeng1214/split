<script>
	import Article from './Article.svelte';

	export let articles;
	export let topic_id;

	let list = [];
	for (let i = 0; i < articles.length; i++) {
		if(!list.includes(articles.topic_id)) list.push(articles.topic_id)
	}
</script>

<tr>
	<td>
		<!-- Topic ID -->
		Row {topic_id}
	</td>
	{#each articles as article}
		{#if article.topic_id === topic_id}
			<Article {article} />
		{/if}
	{/each}
</tr>