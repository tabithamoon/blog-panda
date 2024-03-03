export async function load({ fetch, params }) {
    const res = await fetch('https://posts.api.tabby.page/get/latest/5');
    const posts = await res.json();

    return { posts };
}