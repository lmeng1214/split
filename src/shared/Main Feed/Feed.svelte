<script>
	import TopicRow from './TopicRow.svelte';
	//import NavBar from '../../shared/NavBar.svelte';

	export let articles;

	if (articles === undefined) articles = {topic_id: 0};
	//console.log("check")
	// console.log(Object.keys(articles).length)
	// console.log(articles)
	//
	let list = [];
	// if(articles !== undefined) {
	//Object.prototype.hasOwnProperty.call(articles, 'topic_id') &&
		for (let i = 0; i < articles.length; i++) {
			if (!list.includes(articles[i].topic_id)) list.push(articles[i].topic_id)
			//console.log(articles[i].topic_id)
		}
	// }
</script>

<!--	<NavBar />-->
{#if articles}
	{#each list as _, topic_id}
		<TopicRow {articles} {topic_id} />
	{/each}
{:else}
	<h1>Loading...</h1>
{/if}