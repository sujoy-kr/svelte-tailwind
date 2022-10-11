<script>
    export let poll
    $: totalVote = poll.voteA + poll.voteB
</script>

<div class="text-left p-3 pb-1 bg-rose-200 rounded-lg">
    <h3 class="text-2xl mb-1  text-rose-500 font-semibold">{poll.pollName}</h3>
    <p class="mb-4 text-red-500 font-semibold tracking-wid">
        Total Vote: {totalVote}
    </p>
    <div
        class="bg-rose-400 text-white font-semibold tracking-wider text-lg cursor-pointer rounded-lg p-2 my-2"
    >
        <span>{poll.optionA} ({poll.voteA})</span>
    </div>
    <div
        class="bg-rose-400 text-white font-semibold tracking-wider text-lg cursor-pointer rounded-lg p-2 my-2"
    >
        <span>{poll.optionB} ({poll.voteB})</span>
    </div>
</div>
