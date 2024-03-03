<script>
    import Paragraph from "../../../components/markdown/Paragraph.svelte";
    import Heading from "../../../components/markdown/Heading.svelte";
    import Header from "../../../components/Header.svelte";
    import SvelteMarkdown from 'svelte-markdown'
    export let data

    let body = data.body
</script>

<title>Tabitha's Blog - Post</title>

<Header />

<div class="mx-8 lg:mx-32 xl:mx-64 2xl:mx-96 mt-32 mb-48 leading-relaxed text-justify">
    <SvelteMarkdown source={body} renderers={{ paragraph: Paragraph, heading: Heading }}/>
</div>
