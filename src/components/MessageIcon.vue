<template>
    <!-- <div> -->
        <div class="messageIcon">
            <img src="~@/assets/images/comment.svg" alt="">
        </div>
    <!-- </div> -->
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .messageIcon{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3em;
        height: 3em;
        background-color: #0a2736;
        border-radius: 50%;
        padding: 0.2em;
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 1.5em 1.5em;
        z-index: 1;
        box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.5), 0 6px 10px 0 rgba(255, 255, 255, 0.5);
    }

    .messageIcon img{
        width: 70%;
        height: auto;

    }
</style>