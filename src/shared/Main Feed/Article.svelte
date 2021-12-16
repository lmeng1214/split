<script>
	import dayjs from 'dayjs';
	import axios from 'axios';

	export let article;

	async function starFunc(args) {
		console.log("args: ", args)
		let button = document.getElementById(args);
		console.log("Button: ", button)

		console.log(button.textContent)

		let aID;
		if(button !== null) aID = button.id
		console.log("aID: ", aID)

		// const urlParams = new URLSearchParams(window.location.search);
		// const uID = urlParams.get('uID');
		// console.log(uID);

		axios.post('http://localhost:8080/updateFavorite/', {
			article_id: aID,
			account_id: 1
		}, {
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function (response) {
			// handle success
			console.log(response);
			if(response.data == "Inserted") {
				button.textContent = "Delete Fav?"
			} else {
				button.textContent = "Add Fav?"
			}
		})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	}
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
		<tr>
			Bias: {article.bias < 0 ? "Left" : article.bias > 0 ? "Right" : "Neutral"}
		</tr>
		<tr>
			Popularity: {article.popularity === null ? 0 : article.popularity} out of 3
		</tr>
		<button style='background-color:yellow' id={article.article_id} on:click={(e) => starFunc(e.target.id)}>STAR</button>
	</table>
</td>