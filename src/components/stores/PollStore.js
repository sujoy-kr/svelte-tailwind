import { writable } from 'svelte/store'

let PollStore = writable([
    {
        id: 1,
        pollName: 'This is a default poll.',
        optionA: 'Option A',
        optionB: 'Option B',
        voteA: 5,
        voteB: 10,
    },
    {
        id: 2,
        pollName: 'Omaewamou',
        optionA: 'Shindeiru',
        optionB: 'nani',
        voteA: 0,
        voteB: 0,
    },
])

export default PollStore
