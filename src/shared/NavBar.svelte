<script>
	import axios from 'axios';
	export let articles = "default";
	async function insertFunc(e) {
		e.preventDefault();
		let word = document.getElementById("title");
		let fLCapital = s => s.replace(/./, c => c.toUpperCase())
		word.value = fLCapital(word.value)
		console.log(word.value);
		let list = ['%', word.value, '%'];
		let result = ''.concat(...list);
		console.log(result)
		axios.post('http://localhost:8080/getByKeyword/', {
			word: result,
		}, {
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function (response) {
			// handle success
			//console.log(response);
			articles = response.data;
		})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
		word.value = '';
	}
	async function searchFunc(e) {
		e.preventDefault();
		const sDropdown = document.getElementById("sA");
		console.log(sDropdown.value);
		const sDropdown2 = document.getElementById("sO");
		console.log(sDropdown2.value);
		let nameVal
		if(sDropdown.value == "Source ID") nameVal = "source_id"
		else if(sDropdown.value == "Topic ID") nameVal = "topic_id"
		console.log(nameVal)
		let sortOrder
		if(sDropdown2.value == "Desc") sortOrder = "desc"
		else sortOrder = "asc"
		console.log(sortOrder)
		axios.post('http://localhost:8080/search', {
			name: nameVal,
			order: sortOrder
		}, {
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function (response) {
			console.log(response.data);
			console.log(Object.keys(response.data).length);
			const elem = document.getElementById("output")
			elem.innerText = ""
			for (let i = 0; i < Object.keys(response.data).length; i++) {
				var node = document.createElement("H2");
				node.innerText = "Article ID: " + response.data[i].article_id +
					" + Source ID: " + response.data[i].source_id +
					" + Topic ID: " + response.data[i].topic_id +
					"\n Pub Date: " + response.data[i].pub_date +
					"\n Title: " + response.data[i].title +
					" + URL: " + response.data[i].url + "\n\n";
				elem.appendChild(node);
			}
		})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
		//topic.value = '';
	}
</script>



<table>
	<tr>
		<td class='logo'><span style='color: #0050C8'>|</span>SP <span style='color: #D70000'>|</span>IT</td>
		<div class="row"><input class="place-holder-center" type="text" id="title" placeholder="Enter Keyword"></div>
		<div class="row"><input type="submit" value="Search" id="t" class="full" on:click={insertFunc}></div>
		<!--		<select class="place-holder-center" name="aSearch" id="sA">-->
		<!--			<option value="Source ID">Source ID</option>-->
		<!--			<option value="Topic ID">Topic ID</option>-->
		<!--		</select>-->
		<!--		<select class="place-holder-center" name="aOrder" id="sO">-->
		<!--			<option value="Asc">Asc</option>-->
		<!--			<option value="Desc">Desc</option>-->
		<!--		</select>-->
		<!--		<div class="row"><input type="submit" value="Display Sorted Articles" id="dA" class="full" on:click={searchFunc}></div>-->

		<td class='accountbar'> <a href="/SignIn">Accounts</a> </td>


	</tr>
</table>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@600&display=swap');
    .logo {
        font-family: 'Readex Pro', sans-serif;
        font-size: 60px;
        vertical-align: text-top;
        cursor: pointer;
        color: black;
        text-decoration: none;
    }
</style>