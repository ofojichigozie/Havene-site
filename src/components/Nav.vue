<template>
  <div class="parent-div">
      <div class="h-container">
        <ul class="nav flex-column">
            <li class="nav-item">
                <!-- <router-link class="nav-link" to="#who_we_are" exact>Who we are</router-link> -->
                <a class="nav-link" href="/#who_we_are" exact>Who we are</a>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/what_we_do" exact>What we do</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" data-toggle="collapse" data-target="#collapseDiv1" aria-expanded="false" aria-controls="collapseDiv1">Work with us</a>
                    <ul class="ml-3 nav inner-nav collapse" id="collapseDiv1">
                        <li class="nav-item">
                            <router-link class="nav-link" to="work_as_expert" exact>As an expert</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="work_as_trainee" exact>As a trainee</router-link>
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
                        <router-link class="nav-link" to="send_message" exact>Send us a message</router-link>
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
        name: 'Nav',
        components: {
            ContactModal
        },
        methods: {
            showModal: function(){
                $('#contactModal').modal('show')
            }
        }
    }
</script>

<style scoped>
    
    /* DESKTOP VIEW STYLING */

    .h-container{
        margin-left: 50px;
    }
    .nav li{
        width: 100%;
        font-size: 1.1em;
        line-height: 1em;
    }

    .nav li a{
        color: #135273;
        display: inline-block;
        font-weight: 400;
        margin: 5px;
    }

    .inner-nav li{
        font-size: 0.7em;
        line-height: 1em;
    }

    .router-link-active{
        background: #135273;
        color: #FFFFFF !important;
        /* border: 1px solid #FFFFFF; */
        border-radius: 25px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
    }

    .router-link-active a{
        color: #FFFFFF !important;
    }

    /* MOBILE VIEW STYLING */
    @media screen and (max-width: 425px){
        
    }
</style>
