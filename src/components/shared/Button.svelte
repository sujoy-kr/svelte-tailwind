<script>
    export let type = 'primary'
    export let flat = false
    export let inverse = false
</script>

<button class={type} class:flat class:inverse>
    <slot />
</button>

<style>
    button {
        max-width: fit-content;
        margin: 10px auto;
        border: none;
        color: white;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgb(0, 0, 0, 0.2);
    }

    .primary {
        background-color: #f43e5c;
        border: 3px solid #f43e5c;
    }

    .secondary {
        background-color: #7bbc7d;
        border: 3px solid #7bbc7d;
    }

    .primary.inverse {
        background-color: #ffffff;
        color: #f43e5c;
        border: 3px solid #f43e5c;
    }
    .secondary.inverse {
        background-color: #ffffff;
        color: #7bbc7d;
        border: 3px solid #7bbc7d;
    }

    .flat {
        box-shadow: none;
    }
</style>
