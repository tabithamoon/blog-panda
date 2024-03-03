<script>
    import Paragraph from "../../../components/markdown/Paragraph.svelte";
    import Heading from "../../../components/markdown/Heading.svelte";
    import Header from "../../../components/Header.svelte";
    import SvelteMarkdown from 'svelte-markdown'
    import { DateTime } from 'luxon'
    export let data

    let commentAuthor = ''
    let commentBody = ''

    async function sendComment() {
        let key = (await fetch("https://comments.api.tabby.page/key")).text()
        let send = (await fetch(`https://comments.api.tabby.page/new/${data.post[0].Slug}`,
            {
                method: "POST",
                body: JSON.stringify({
                    key: key,
                    author: commentAuthor,
                    body: commentBody
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })).text()

        alert(send)
    }
</script>

<title>Tabitha's Blog - {data.post[0].Title}</title>

<Header />

<!-- body of the post-->
<div class="mx-8 lg:mx-32 xl:mx-64 2xl:mx-96 mt-32 mb-32 leading-relaxed text-justify">
    <p class="text-gray-500 italic">{data.post[0].Timestamp}</p>
    <SvelteMarkdown source={data.body} renderers={{ paragraph: Paragraph, heading: Heading }}/>
</div>

<!-- comments! -->

<div class="mx-8 lg:mx-32 xl:mx-64 2xl:mx-96 mt-32 mb-48 leading-relaxed text-justify">
    <p class="text-3xl">Comments</p>
    {#each data.comments as {Author, Body, Timestamp}}
        <div class="flex flex-row mt-4">
            <div class="text-lg italic">{Author}</div>
            <div class="text-sm text-gray-500 mt-auto ml-2">{
                    DateTime.fromISO(Timestamp, { zone: "UTC" }).toLocaleString()
                }
            </div>
        </div>
        <div>
            {Body}
        </div>
    {/each}

    <!-- adding comments! -->
    <p class="mt-4 text-xl">Add a comment</p>
    <div class="flex flex-col w-full">
        <input bind:value={commentAuthor}
            placeholder="Author"
            class="mt-2 w-full rounded-lg px-2.5 border
                border-neutral-600    
                bg-neutral-800"
        />
        <textarea bind:value={commentBody}
            placeholder="Comment"
            class="mt-2 w-full rounded-lg px-2.5 pt-1.5 border h-32
                border-neutral-600    
                bg-neutral-800"
        />
    </div>
    
    <button on:click={sendComment}
        class = "w-32 mt-2 border border-neutral-600 bg-neutral-800">Send Comment</button>
</div>