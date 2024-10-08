<script>
	// import github from '$lib/images/github.svg';
	import user from '$lib/images/user.svg';
	import home from '$lib/images/home.svg';
</script>

<header>
	<div class="corner">
		<a href="/"><img src={home} alt="home" /></a>
	</div>

	<nav>center</nav>

	<div class="corner">
		<a href="/profile">
			<img src={user} alt="profile" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
