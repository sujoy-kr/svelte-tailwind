<script>
	import PollDetails from './PollDetails.svelte'
    export let polls
</script>

<div class="grid mt-8 grid-cols-2 gap-4">
    {#each polls as poll}
    <PollDetails {poll}/>
    {/each}
</div>
