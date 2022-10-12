<script>
    import { fade, slide, scale } from 'svelte/transition'
    import PollStore from './stores/PollStore'
    import Card from './shared/Card.svelte'
    import Button from './shared/Button.svelte'
    import { tweened } from 'svelte/motion'
    import { cubicOut } from 'svelte/easing'

    export let poll
    $: totalVote = poll.voteA + poll.voteB

    const handleVote = (option, id) => {
        let copiedPolls = $PollStore
        let pollToUpdate = copiedPolls.find((poll) => poll.id === id)
        if (option === 'a') {
            pollToUpdate.voteA++
        }

        if (option === 'b') {
            pollToUpdate.voteB++
        }
        PollStore.update(() => {
            return copiedPolls
        })
    }

    const handleDeletion = (id) => {
        PollStore.update((existingPolls) => {
            return existingPolls.filter((poll) => poll.id !== id)
        })
    }

    $: percentA = Math.floor((100 / totalVote) * poll.voteA) || 0
    $: percentB = Math.floor((100 / totalVote) * poll.voteB) || 0

    let tweenedA = tweened(0, {
        duration: 400,
        easing: cubicOut,
    })

    let tweenedB = tweened(0, {
        duration: 400,
        easing: cubicOut,
    })

    $: tweenedA.set(percentA)
    $: tweenedB.set(percentB)
</script>

<Card>
    <div class="text-left p-3 pb-1 bg-rose-100 rounded-lg">
        <h3 class="text-2xl mb-1  text-rose-500 font-semibold">
            {poll.pollName}
        </h3>
        <p class="mb-4 text-red-500 font-semibold tracking-wid">
            Total Vote: {totalVote}
        </p>
        <div
            on:click={() => handleVote('a', poll.id)}
            class="bg-fuchsia-300 relative text-white font-semibold tracking-wider text-lg cursor-pointer rounded-lg my-2 border-l-4 border-fuchsia-500"
        >
            <div
                style="width:{$tweenedA}%;"
                class="percentage-a absolute h-full box bg-fuchsia-400 z-20 rounded-lg"
            />
            <p class="p-2 z-30 relative">{poll.optionA} ({poll.voteA})</p>
        </div>
        <div
            on:click={() => handleVote('b', poll.id)}
            class="bg-sky-300 relative text-white font-semibold tracking-wider text-lg cursor-pointer rounded-lg my-2 border-l-4 border-sky-600"
        >
            <div
                style="width:{$tweenedB}%;"
                class="percentage-a absolute h-full bg-sky-500 z-20 rounded-lg"
            />
            <p class="p-2 z-30 relative">{poll.optionB} ({poll.voteB})</p>
        </div>
        <div class="text-right">
            <Button on:click={() => handleDeletion(poll.id)} flat={true}
                >Delete!</Button
            >
        </div>
    </div>
</Card>
