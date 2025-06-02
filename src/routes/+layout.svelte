<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<style>
    @import url('https://fonts.googleapis.com/css2?family=Ancizar+Serif:ital,wght@0,300..900;1,300..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

    :global(body) {
        font-family: "Inter", sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f8f7f4;
        color: #2c241e;
    }

    :global(h1) {
        font-family: "Ancizar Serif", sans-serif;
    }
</style>
