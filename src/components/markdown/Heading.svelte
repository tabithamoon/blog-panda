<script>
    export let text = ""
    export let level = 0
    export const raw = ""
</script>

{#if level == 0}
    <h1 class="text-3xl">{text}</h1>

{:else if level == 1}
    <h2 class="text-2xl">{text}</h2>

{:else if level == 2}
    <h3 class="text-xl">{text}</h3>
{/if}