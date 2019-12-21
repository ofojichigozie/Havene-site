<template>
  <div class="parent-div">
    <div class="h-container icon-section">
        <i class="fa fa-facebook"></i>
        <i class="fa fa-instagram"></i>
        <i class="fa fa-whatsapp"></i>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'SocialMediaLink'
    }
</script>

<style scoped>
    .h-container{
        margin-left: 50px;
    }
    .icon-section{
        margin-top: 20px;
    }

    .icon-section i{
        background: #135273;
        color: #FFFFFF;
        border-radius: 50%;
        padding: 0.4em;
        font-size: 1.1em;
        margin: 5px;
        text-align: center;
        letter-spacing: 0.2em;
    }

    .fa-facebook{
        padding: 0.4em 0.52em !important;
    }

    /* MOBILE VIEW STYLING */
    @media screen and (max-width: 425px){
        
    }
</style>
