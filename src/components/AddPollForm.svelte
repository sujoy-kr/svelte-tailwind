<script>
    import { fade, slide, scale } from 'svelte/transition'
    import { createEventDispatcher } from 'svelte'
    let dispatch = createEventDispatcher()
    import Button from './shared/Button.svelte'
    import PollStore from './stores/PollStore'
    let valid = false

    let newPoll = {
        pollName: '',
        optionA: '',
        optionB: '',
    }

    let errors = {
        pollName: '',
        optionA: '',
        optionB: '',
    }

    let handlePollSubmit = () => {
        valid = true

        if (newPoll.pollName.trim().length < 5) {
            valid = false
            errors.pollName = 'Poll name should atleast be 5 characters long.'
        } else {
            errors.pollName = ''
        }

        if (newPoll.optionA.trim().length < 1) {
            valid = false
            errors.optionA = "Option A can't be empty."
        } else {
            errors.optionA = ''
        }

        if (newPoll.optionB.trim().length < 1) {
            valid = false
            errors.optionB = "Option B can't be empty."
        } else {
            errors.optionB = ''
        }

        if (valid) {
            let pollToSend = {
                id: Math.random(),
                pollName: newPoll.pollName,
                optionA: newPoll.optionA,
                optionB: newPoll.optionB,
                voteA: 0,
                voteB: 0,
            }

            dispatch('addPoll')

            // @ts-ignore
            PollStore.update((existingPolls) => {
                return [pollToSend, ...existingPolls]
            })

            newPoll.pollName = ''
            newPoll.optionA = ''
            newPoll.optionB = ''
        }
    }
</script>

<form
    in:scale={{ duration: 250 }}
    class="flex gap-4 mt-2 justify-center flex-col"
    on:submit|preventDefault={handlePollSubmit}
>
    <h1 class="text-rose-500 text-3xl mt-5 p-1 font-bold uppercase">
        Add a new poll:
    </h1>
    <input
        type="text"
        bind:value={newPoll.pollName}
        placeholder="Name of the poll"
    />
    <div class="text-rose-500 font-semibold text-lg">
        {errors.pollName}
    </div>
    <input type="text" bind:value={newPoll.optionA} placeholder="Option A" />
    <div class="text-rose-500 font-semibold text-lg">{errors.optionA}</div>
    <input type="text" bind:value={newPoll.optionB} placeholder="Option B" />
    <div class="text-rose-500 font-semibold text-lg">{errors.optionB}</div>
    <Button type="secondary" flat={true}>Submit</Button>
</form>

<style>
    form input {
        width: 70%;
        padding: 15px;
        margin-bottom: 15px;
        margin: auto;
        font-size: 20px;
        border-radius: 0.5rem;
    }

    form input:focus {
        outline: 2px solid #f43e5c;
    }
</style>
