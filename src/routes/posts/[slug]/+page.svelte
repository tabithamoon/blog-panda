<script>
    import Header from "../../../components/Header.svelte";
    import { invalidateAll } from '$app/navigation';
    import { DateTime } from 'luxon'
    import { marked } from 'marked';

    export let data

    // Configuring markdown renderer
    const renderer = {
        heading(text, level) {
            switch(level){
                case 3:
                    return `<h3 class="mt-4 text-xl">${text}</h3>`
                case 2:
                    return `<h2 class="mt-4 text-2xl">${text}</h2>`
                case 1:
                    return `<h1 class="mt-4 text-3xl">${text}</h1>`
            }
        },
        
        paragraph(text) {
            return `<p class="mt-4">${text}</p>`
        },

        list(body, ordered, start) {
            return `<ul class="mt-4">${body}</p>`
        },

        listitem(text, task, checked) {
            return `<li class="ml-4 mt-1">• ${text}</li>`
        },

        code(code, infostring, escaped) {
            return `
                <div class="mt-4 p-4 rounded-lg text-md bg-truedarkgray drop-shadow-xl overflow-x-auto">
                    <p class="font-mono whitespace-pre">${code}</p>
                </div>
            `
        }
    }
    marked.use({ renderer, gfm: true })

    // Variables for comments section
    let commentAuthor = ''
    let commentBody = ''
    let sendStatus = ''

    // Send comments function!
    async function sendComment() {
        sendStatus = 'Obtaining key...'
        let key = await fetch("https://comments.api.tabby.page/key")

        if(key.status == 429) {
            sendStatus = '';
            alert("You are trying to comment too fast. Slow down!");
            return;
        }

        key = await key.text()

        sendStatus = 'Sending comment...'

        let send = await fetch(`https://comments.api.tabby.page/new/${data.post[0].Slug}`,
            {
                method: "POST",
                body: JSON.stringify({
                    key: key,
                    author: commentAuthor,
                    body: commentBody
                }),
                headers: {
                    "Content-Type": "text/plain"
                }
            })

        sendStatus = ''
        
        if(send.status === 200) {
            sendStatus = `${await send.text()}`

            commentAuthor = ''
            commentBody = ''

            invalidateAll()
        } else {
            switch(send.status) {
                case 400:
                    alert(`Something is wrong with your request: ${await send.text()}`)
                    return;
                case 401:
                    alert(`The API determined you are not authorized. Try again soon.`);
                    return;
                case 429:
                    alert(`The API determined you're spamming! Please... please stop.`)
                    return;
                default:
                    alert(`Something went wrong! Here's the message from the backend: ${await send.text()}`)
                    return;
            }
        }
    }
</script>

<title>Tabitha's Blog - {data.post[0].Title}</title>

<Header />

<!-- body of the post-->
<div class="mx-8 lg:mx-32 xl:mx-64 2xl:mx-96 mt-32 mb-32 leading-relaxed text-justify">
    <p class="text-gray-500 italic">{data.post[0].Timestamp}</p>
    {@html marked.parse(data.body)}
</div>

<!-- comments! -->

<div class="mx-8 lg:mx-32 xl:mx-64 2xl:mx-96 mt-32 mb-48 leading-relaxed text-justify">
    <p class="text-3xl">Comments</p>
    {#each data.comments as {Author, Body, Timestamp}}
        <div class="flex flex-row mt-4">
            <div class="text-lg italic">{Author}</div>
            <div class="text-sm text-gray-500 my-auto ml-2">{
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
    
    <p class="mt-2 text-neutral-400 italic">Your IP address will be saved alongside your comment, for anti-spam purposes.</p>

    <div class="flex flex-row">
        <button on:click={sendComment}
            class = "w-32 mt-2 border border-neutral-600 bg-neutral-800">Send Comment</button>
        <p class="text-md ml-2 mt-2">{sendStatus}</p>
    </div>
    
</div>
