<script>
	import dayjs from 'dayjs';

	export let article;
</script>

<td>
	<table>
		<tr>
			{#if article.image}
				<img src={article.image} width='300px' height='auto'/>
			{/if}
		</tr>
		<tr>
			<a href={article.url}>{article.title}</a>
		</tr>
		<tr>
			Published {dayjs(article.pub_date).format("MMM D, YYYY h:mm a")}
		</tr>
	</table>
</td>