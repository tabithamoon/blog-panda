<title>Tabitha's Blog - Posts</title>

<script>
    import Header from "../../components/Header.svelte";
    export let data;
</script>

<Header />

<div class="flex flex-col h-screen w-screen">
    <div class="mt-32 mx-auto">
        <p class="text-6xl">Posts</p>
    </div>
    {#each data.posts as {Title}}
        <div>
            <p>{Title}</p>
        </div>
    {/each}
</div>