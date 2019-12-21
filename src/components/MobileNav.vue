<template>
  <div class="mobile-nav-div">
    <a href="javascript:void(0)" class="close-btn" v-on:click="closeNav()">&times;</a>
    
    <div class="h-container">
        <ul class="nav flex-column">
            <li class="nav-item">
                <router-link class="nav-link" to="/" exact v-on:click.native="closeNav()">Who we are</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/what_we_do" exact v-on:click.native="closeNav()">What we do</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" data-toggle="collapse" data-target="#collapseDiv1" aria-expanded="false" aria-controls="collapseDiv1">Work with us</a>
                    <ul class="ml-3 nav inner-nav collapse" id="collapseDiv1">
                        <li class="nav-item">
                            <router-link class="nav-link" to="work_as_expert" exact v-on:click.native="closeNav()">As an expert</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="work_as_trainee" exact v-on:click.native="closeNav()">As a trainee</router-link>
                        </li>
                    </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" data-toggle="collapse" data-target="#collapseDiv2" aria-expanded="false" aria-controls="collapseDiv2">Get in touch</a>
                <ul class="ml-3 nav inner-nav collapse" id="collapseDiv2">
                    <li class="nav-item">
                        <a class="nav-link" to="#" v-on:click.prevent="showModal()" exact>Call us on telephone</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="send_message" exact v-on:click.native="closeNav()">Send us a message</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <ContactModal id="contactModal"/>
  </div>
</template>

<script>
    import ContactModal from './ContactModal.vue';

    export default {
        name: 'MobileNav',
        components: {
            ContactModal
        },
        methods: {
            closeNav: function(){
                $(".mobile-nav-div").css("width", "0px");
            },

            showModal: function(){
                $(".mobile-nav-div").css("width", "0px");
                $('#contactModal').modal('show')
            }
        }
    }
</script>

<style scoped>
    .mobile-nav-div{
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background: #135273;
        overflow-x: hidden;
        transition: 0.1s;
        padding-top: 10px;
    }

    .mobile-nav-div a{
        /* padding: 8px 8px 8px 32px; */
        text-decoration: none;
        /* font-size: 25px; */
        display: block;
        transition: 0.1s;
    }

    .mobile-nav-div a:hover{
        color: #FFFFFF;
    }

    .mobile-nav-div .close-btn{
        position: absolute;
        top: 0;
        right: 10px;
        font-size: 18pt;

    }

    .h-container{
        padding-top: 30px;
    }
    .nav li{
        width: 100%;
        font-size: 1em;
        line-height: 1em;
    }

    .nav li a{
        color: #FFFFFF;
        display: inline-block;
        font-weight: 400;
        margin: 5px;
    }

    .inner-nav li{
        font-size: 0.9em;
        line-height: 1em;
    }
</style>
