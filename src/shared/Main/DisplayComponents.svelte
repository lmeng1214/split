<script>
	import dayjs from 'dayjs';

	export let articles;
</script>

{#if articles}
	{#each articles as article}
		<tr>
			{#if article.image}
				<td><img src={article.image} width='300px' height='auto'/></td>
			{/if}
			<td><a href={article.url}>{article.title}</a></td>
			<td>Published {dayjs(article.pub_date).format("MMM D, YYYY h:mm a")}</td>
		</tr>
	{/each}
{:else}
	<div class='loading'>Loading...</div>
{/if}
