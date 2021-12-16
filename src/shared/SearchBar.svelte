<script>
	import axios from 'axios';

	export let articles;

	let keyword = "";

	$: if (keyword.length !== 0) {
		search(keyword);
	} else {
		axios.get("http://localhost:8080/").then(function (res) {
			console.log("SearchBar >> Get Articles");
			console.log(res.data);
			articles = res.data;
		})
	}

	function search(keyword) {
		axios.post(
			'http://localhost:8080/getByKeyword',
			{word: keyword}
		).then(function (res) {
			console.log("SearchBar >> Search Articles with keyword " + keyword);
			console.log(res.data.rows);
			articles = res.data.rows;
		})
	}

</script>

<input type='text' bind:value={keyword} placeholder='Enter Keyword'/>