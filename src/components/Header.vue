<template>
  <div class="parent-header">
      <div class="child-header">
        <div class="nav-mobile-btn">
            <nav class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" v-on:click="openNav()">
                    <span class="navbar-toggler-icon" style="font-size: 10pt;"></span>
                </button>
            </nav>
        </div>
        <img src="~@/assets/images/logo.png" alt="Havene logo">
        <a href="#">Visit our blog</a>
      </div>

        <!-- Navbar for mobile view -->
        <MobileNav class="mobile-nav-div"/>
  </div>
</template>

<script>
    import MobileNav from './MobileNav.vue'

    export default {
        name: 'Header',
        components:{
            MobileNav
        },
        methods: {
            openNav: function(){
                $(".mobile-nav-div").css("width", "75%");
            }
        }
    }
</script>


<style scoped>
    .parent-header{
        background-color: rgba(19, 82, 115, 0.05);
        border-bottom: 1px solid rgba(19, 82, 115, 1);
    }

    .child-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0px 2.0%;
    }

    /* DESKTOP VIEW STYLING */
    .child-header img{
        width: 25%;
        height: auto;
    }

    .nav-mobile-btn{
        display: none;
    }

    .child-header a{
        background: #FFFFFF;
        border: 2px solid #135273;
        font-weight: bold;
        color: #135273;
        border-radius: 20px;
        letter-spacing: 0.1em;
        padding: 5px 25px;
    }

    .mobile-nav-div{
        width: 0px;
    }

    /* MOBILE VIEW STYLING */
    @media screen and (max-width: 425px){

        .child-header{
            display: flex;
            justify-content: start;
            align-items: center;
        }

        .child-header img{
            padding-top: 15px;
            padding-left: 0;
            margin-left: -20px;
            width: 40%;
            height: auto;
        }

        .nav-mobile-btn{
            display: block;
        }

        .child-header a{
            /* background: #FFFFFF;
            border: 2px solid #135273;
            font-weight: bold;
            font-size: 0.8em;
            color: #135273;
            border-radius: 20px;
            padding: 2px 12px; */
            display: none;
        }
    }
</style>
