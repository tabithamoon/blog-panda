export async function load({ fetch, params }) {
    const getPost = await fetch(`https://posts.api.tabby.page/get/slug/${params.slug}`);
    const post = await getPost.json();

    const getBody = await fetch(post[0].Url);
    const body = await getBody.text();

    const getComments = await fetch(`https://comments.api.tabby.page/get/${params.slug}`)
    const comments = await getComments.json();

    return { post, body, comments };
}