<script>
	import {goto} from "$app/navigation";

	let email = "";
	let password = "";
	let isLoading = false;

	let isSubmitted = false;
	let isSuccess = false;
	let form;
	export let submit;
	let errors = {};

	async function handleSubmit () {
		errors = {};
		if (email.length === 0) {
			errors.email = "Field should not be empty";
		}
		if (password.length === 0) {
			errors.password = "Field should not be empty";
		}

		if (Object.keys(errors).length === 0) {
			const formData = new FormData(form);
			const res = await fetch("http://localhost:8080/check_user", {method: "POST", body: formData})


			if(res.ok) {

				const json = await res.json();

				console.log(json)
				isSubmitted = true
				isSuccess = json.isLoggedIn

				if(json.isLoggedIn) {

					formData.set('label', 'email');
					formData.set('value', formData.get('email'))

					const cookieRes = await fetch('http://localhost:8080/create-cookie', {method: 'POST', body: formData})


					if(cookieRes.ok) {
						console.log(await cookieRes.json())
						await goto('/');
					}
				}
			}
		}
	}
</script>

<style>
    .background {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        z-index:2;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to right, #cd76e2, #e358ab);
    }

    .login-box{
        position: fixed;
        margin: 20vh auto;
        height: 200px;
        width: 400px;
        color: white;
        padding: 15px;
        background-color: rgb(42,42,187);
        border: solid 5px white;
        z-index: 5;
    }

	:global(.btn) {
		background: #95a5a6;
		border-radius: 5px;
		padding: 8px 12px;
		color: black;
	}


</style>

<form  method="post" bind:this={form} on:submit|preventDefault={handleSubmit}>

	<h1>👤</h1>

		<label>Email</label>
		<input name="email" placeholder="name@example.com" bind:value={email} />

		<label>Password</label>
		<input name="password" type="password" bind:value={password} />

		<br />
		<button type="submit" class="btn">
			{#if isLoading}Logging in...{:else}Log in 🔒{/if}
		</button>


		{#if isSubmitted}
	{#if isSuccess}
		<div class="success">
			🔓
			<br />
			You've been successfully logged in.
		</div>
	{:else}
		<div>
			🔓
			<br />
			Uername / Password is wrong.
		</div>
	{/if}
	{/if}


		<p>Don't have an account ?</p>
		<a href="/SignUp" class="btn" > Signup </a>
		<!-- <button type="signup"> Signup</button> -->

		{#if Object.keys(errors).length > 0}
			<ul class="errors">
				{#each Object.keys(errors) as field}
					<li>{field}: {errors[field]}</li>
				{/each}
			</ul>
		{/if}


</form>