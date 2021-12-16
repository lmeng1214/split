<form id="form" on:submit|preventDefault={submit} method="post" bind:this={form} class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
	<h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
	<div class="relative mb-4">
		<label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
		<input type="text" id="full-name" required name="fullName" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
	</div>
	<div class="relative mb-4">
		<label for="email" class="leading-7 text-sm text-gray-600" >Email</label>
		<input  type="email" id="email" required name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
	</div>
	<div class="relative mb-4">
		<label for="password" class="leading-7 text-sm text-gray-600" >Password</label>
		<input required type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
	</div>
	<button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>



</form>

<script>
	import {goto} from "$app/navigation"
	import axios from 'axios';

	let form;

	//async function insertUser(e) {
		//e.preventDefault();
		//c/onst formData = document.getElementById('form');
		//const fullName = formData.element['fullName'];
		//c/onsole.log(fullName.value);

		//axios.post('http://localhost:8080/insertUser/', {

		//}, {

		//});
	//}

	async function submit(e) {
		e.preventDefault();

		const formData = new FormData(form);

		console.log(formData.get('fullName'));

		const res = await fetch("http://localhost:8080/user", {method: "POST", body: formData})



		if(res.ok)  {
					const json = await res.json()

					console.log(json)
			if(json.isCreated) {
				await goto('/SignIn');
			}
		}
	}

</script>