<script lang="js">
	import purpleFoot from '$lib/assets/img/hackerImage.jpg';
	import { onMount } from "svelte";
    import { onAuthStateChanged, getAuth } from "firebase/auth";
    import { goto } from "$app/navigation";
    import { isLoggedIn } from "$lib/stores/stores";

    onMount(() => {
        const auth = getAuth();
        onAuthStateChanged(auth , (user) => {
            if(user) {
                isLoggedIn.update(() => true);
            }
            else {
                $isLoggedIn = false;
                goto('/');
                isLoggedIn.update(() => false);
            }
        })
    })
	
</script>

<section id="title">
	<div class="container-fluid">
		<!-- Nav Bar -->
		<nav class="navbar navbar-expand-lg navbar-dark">
			<!-- Hamburger Menu Button -->
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<a class="navbar-brand" href="">Hack Together</a>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<a class="nav-link" href="/login">Login</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/signup">SignUp</a>
					</li>
					<li class="nav-item aboutLink">
						<a class="nav-link" href="/about">About</a>
					</li>
					{#if $isLoggedIn}
						<li class="nav-item aboutLink">
						<a class="nav-link" href="/swiper">Swiper</a>
					</li>
					{/if}
				</ul>
				<div class="col-md-6">
					<img class="iphone-image" src={purpleFoot} alt="iphone-mockup" />
				</div>
			</div>
		</nav>

		<!-- Title -->
		<div class="titleBS">
			<div class="row">
				<div class="col-lg-7">
					<h1>Find Opponents to Hack Against!</h1>
					<button type="button" class="btn btn-light btn-lg download-button">
						<i class="fab fa-google-play"></i> Download
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	#title {
		background-color: #000000;
		color: #fff;
	}

	.aboutLink {
		position: relative;
		z-index: 77;
	}

	h1 {
		font-family: 'Montserrat', sans-serif;
		font-size: 3.5rem;
		font-weight: 900;
		line-height: 1.5;
	}

	.container-fluid {
		padding: 3% 15% 7%;
	}

	/* Navigation Bar */
	.navbar {
		padding: 0 0 4.5rem;
	}

	.navbar-brand {
		font-family: 'Ubuntu', sans-serif;
		font-size: 2.5rem;
		font-weight: bold;
	}

	.nav-item {
		padding: 0 18px;
	}

	.nav-link {
		font-size: 1.2rem;
		font-family: 'Montserrat', sans-serif;
		font-weight: 300;
	}

	/* Download Buttons */
	.download-button {
		margin: 5% 3% 5% 0;
	}

	.iphone-image {
		width: 60%;
		transform: rotate(25deg);
		position: absolute;
		right: -12%;
	}
</style>
