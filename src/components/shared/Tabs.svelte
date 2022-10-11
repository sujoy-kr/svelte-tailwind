<script>
    import { createEventDispatcher } from 'svelte'
    let dispatch = createEventDispatcher()

    export let activeTab
    export let tabs
</script>

<ul class="text-center">
    {#each tabs as tab}
        <li
            on:click={() => dispatch('changeTab', tab)}
            class:active={tab === activeTab}
            class="rounded-lg inline-block w-60 text-2xl p-3 bg-rose-300 m-2 text-white tracking-wide font-semibold"
        >
            {tab}
        </li>
    {/each}
</ul>

<style>
    .active {
        background-color: #f43e5c;
    }
</style>
