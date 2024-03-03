<script>
    import Paragraph from "../../../components/markdown/Paragraph.svelte";
    import Heading from "../../../components/markdown/Heading.svelte";
    import Header from "../../../components/Header.svelte";
    import SvelteMarkdown from 'svelte-markdown'
    export let data

    console.log(data.post[0])
</script>

<title>Tabitha's Blog - {data.post[0].Title}</title>

<Header />

<div class="mx-8 lg:mx-32 xl:mx-64 2xl:mx-96 mt-32 mb-48 leading-relaxed text-justify">
    <p class="text-gray-500 italic">{data.post[0].Timestamp}</p>
    <SvelteMarkdown source={data.body} renderers={{ paragraph: Paragraph, heading: Heading }}/>
</div>
