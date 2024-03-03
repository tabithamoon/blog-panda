<title>Tabitha's Blog - Posts</title>

<script>
    import Header from "../../components/Header.svelte";
    export let data;
</script>

<Header />

<div class="flex flex-col h-screen w-screen">
    <div class="mt-32 mx-auto text-center lg:text-left lg:mx-0 lg:ml-64">
        <p class="text-7xl">Posts</p>

        {#each data.posts as {Title, Timestamp, Path, Slug}}
            <div class="mt-8 mx-auto">
                <a class="text-2xl italic" href="/posts/{Slug}">{Title}</a>
                <p class="text-base text-gray-500">{Timestamp}</p>
            </div>
        {/each}
    </div>
</div>