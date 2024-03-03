<title>Tabitha's Blog</title>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" >
</svelte:head>

<script>
    import github_logo from "$lib/assets/github-mark-white.svg";
    import Header from '../components/Header.svelte';
    export let data;
</script>

<Header />

<div class="flex flex-col h-screen text-white">
    <div class="flex flex-col lg:flex-row m-auto">
        <div class="flex flex-col m-auto text-center text-6xl pt-20 lg:pt-0 lg:text-left lg:text-8xl xl:text-9xl">
            <p>Hi,</p>
            <p class="text-orange-500">I'm Tabitha</p>
            <p class="text-lg lg:ml-2">I'm a red panda on the internet.</p>
        </div>
        <div class="flex flex-col min-h-full p-10">
            <img class="object-contain max-h-80 xl:max-h-96 lg:mt-16" src="{data.item.link}" alt="a cute red panda"/>
            <p class="text-sm pt-4 italic">{data.item.author}</p>
            <p class="text-sm italic">{data.item.source}</p>
        </div>
    </div>
    <div class="flex w-full h-min mb-16 lg:mb-8">
        <i class="mi mi-arrow-down mx-auto"></i>
    </div>
</div>
<div class="w-full text-center mt-24">
    <p>I'm a software dev and general computer nerd in Brazil.</p>
    <p>This is my web presence and blog, where I post about whatever.</p>
</div>
<div class="w-full text-center my-4">
    <p>I'm far from a frontend developer though.</p>
    <p>Don't expect any fancy design or effects.</p>
</div>
<div class="flex w-full my-20">
    <a class="mx-auto" href="https://github.com/tabithamoon/blog">
        <img class="max-h-10" src={github_logo} alt="link to this page on GitHub"/>
    </a>
</div>
