export async function load({ fetch, params }) {
    const res = await fetch('https://panda-img.api.tabby.page/');
    const item = await res.json();

    return { item };
}