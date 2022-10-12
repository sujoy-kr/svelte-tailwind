<script>
    // @ts-ignore
    import PollList from './components/PollList.svelte'
    import AddPollForm from './components/AddPollForm.svelte'
    import Tabs from './components/shared/Tabs.svelte'
    import Header from './components/Header.svelte'
    import Footer from './components/Footer.svelte'

    const tabs = ['Current Polls', 'Add New Poll']
    let activeTab = 'Current Polls'

    let polls = [
        {
            id: 1,
            pollName: "Who's the good boy?",
            optionA: 'Woof',
            optionB: 'Woof Woof',
            voteA: 5,
            voteB: 10,
        },
        {
            id: 2,
            pollName: 'Say my name?',
            optionA: 'Heisenborger',
            optionB: 'Explain yourself.',
            voteA: 0,
            voteB: 0,
        },
    ]

    const changeTab = (e) => {
        activeTab = e.detail
    }

    const handleAddPoll = (e) => {
        activeTab = 'Current Polls'
    }
</script>

<main>
    <Header />
    <div class="container text-center m-auto">
        <Tabs {tabs} {activeTab} on:changeTab={changeTab} />
        {#if activeTab === 'Current Polls'}
            <PollList />
        {:else if activeTab === 'Add New Poll'}
            <AddPollForm on:addPoll={handleAddPoll} />
        {/if}
    </div>
    <Footer />
</main>
