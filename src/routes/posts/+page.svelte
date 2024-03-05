<title>Tabitha's Blog - Posts</title>

<script>
    import Header from "../../components/Header.svelte";
    export let data;
</script>

<Header />

<div class="flex flex-col h-screen w-screen">
    <div class="mt-32 mx-auto text-center lg:text-left lg:mx-0 lg:ml-64">
        <div class="flex flex-col lg:-ml-2">
            <p class="text-7xl">Posts</p>
            <a class="ml-1.5 italic text-neutral-500" href="https://feed.tabby.page">
                RSS
            </a>
        </div>

        {#each data.posts as {Title, Timestamp, Slug}}
            <div class="mt-8 mx-auto">
                <a class="text-2xl italic" href="/posts/{Slug}">{Title}</a>
                <p class="text-base text-gray-500">{Timestamp}</p>
            </div>
        {/each}
    </div>
</div>