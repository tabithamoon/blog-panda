export async function load({ fetch, params }) {
    const getPost = await fetch(`https://posts.api.tabby.page/get/slug/${params.slug}`);
    const post = await getPost.json();

    const getBody = await fetch(post[0].Url);
    const body = await getBody.text();

    return { body };
}