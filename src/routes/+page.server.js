export async function load({ fetch, params }) {
    const res = await fetch('https://panda-img.tabithamoon.workers.dev/');
    const item = await res.json();

    return { item };
}