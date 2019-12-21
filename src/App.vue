<template>
  <div id="app">
    <Header></Header>
    <MessageIconForSmallScreen class="sm-message-icon"/>

    <div class="row">
      <div class="col-lg-2 col-md-3 col-sm-12">
        <Nav class="nav-desktop"></Nav>
        <SocialMediaLink class="socials-desktop"></SocialMediaLink>
      </div>
      <div class="col-lg-10 col-md-9 col-sm-12 view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Nav from './components/Nav.vue'
  import SocialMediaLink from './components/SocialMediaLink.vue'
  import MessageIconForSmallScreen from './components/MessageIcon.vue'

  export default {
    name: 'app',
    components: {
      Header,
      MessageIconForSmallScreen,
      Nav,
      SocialMediaLink
    }
  }
</script>

<style>
  .row{
    width: 100%;
    margin: 2em 0;
  }

  .sm-message-icon{
    display: none;
  }

  .socials-desktop{
    /* position: absolute;
    bottom: 2em; */
  }

  /* MOBILE VIEW STYLING */
  @media screen and (max-width: 450px){
    .row{
      margin: 0 0;
    }

    .sm-message-icon{
      display: block;
    }

    .nav-desktop{
      display: none;
    }

    .view{
      padding: 0px;
    }

    .socials-desktop{
      display: none;
    }
  }
</style>
