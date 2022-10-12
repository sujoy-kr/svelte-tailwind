<script>
    import { fade, slide, scale } from 'svelte/transition'
    import { onMount, onDestroy } from 'svelte'
    import PollDetails from './PollDetails.svelte'
    import PollStore from './stores/PollStore'

    import { flip } from 'svelte/animate'
</script>

<div class="grid mt-8 grid-cols-2 gap-4">
    {#each $PollStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
            <PollDetails {poll} />
        </div>
    {/each}
</div>
