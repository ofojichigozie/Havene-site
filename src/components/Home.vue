<template>
  <div class="parent-div">
    <div class="landing-page-div">
        <div class="main">
            <div class="row top-row">
                <div class="col-md-5 col-sm-12">
                    <h2>A building is as good as its covering,</h2>
                    <h1>Cover your building right with <span>havene</span>.</h1>
                </div>
                <div class="col-md-6 col-sm-12">
                    <!-- <img src="~@/assets/images/comment.svg" alt=""> -->
                </div>
            </div>
        </div>
    </div>

    <div class="who-we-are-div" id="who_we_are">
        <!-- <h2 class="text-center">Who we are</h2>
        <hr style=""> -->
        <div class="text-justify description">
            Havene roof and façade is an environment-focused company that exist to establish the right interior and exterior conditions where persons could live and work, and nurture a healthy living, by developing the right building envelope design and installation, and through this intervention foster environmental consciousness and responsiveness in Nigeria, West Africa and Sub-Sahara Africa
        </div>

        <div class="row">
            
            <div class="col-md-9 col-sm-12">
                <div class="text-center home-title-sm">
                    <h4>our vision</h4>
                </div>
                <div class="card text-justify more-description">
                    <div class="card-body">
                        To pioneer environment consciousness and responsiveness in housing reforms and infrastructural schemes in the Nigerian and African sphere, to the end that people across varying strata of society can live, work and recreate in environments that promotes their health and wellbeing.  
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-12 home-title-md">
                <h4 class="text-left"> <i class="fa fa-chevron-left"></i> vision</h4>
            </div>
        </div>

        <div class="row">
            
            <div class="col-md-9 col-sm-12">
                <div class="text-center home-title-sm">
                    <h4>our mission</h4>
                </div>
                <div class="card text-justify more-description">
                    <div class="card-body">
                        <ol>
                            <li>Offer excellent building envelope (Roof and Façade) design and installation to foster sustainability and environmental consciousness in the building industry and the built environment.</li>
                            <li>Research new building envelope materials and technologies from around the world, and develop ways to integrate these findings into the local environment of interest.</li>
                            <li>Foster awareness and responsiveness in the general public and young professionals towards the environment.</li>
                            <li>Develop and operate an educational programme in sustainable building development particularly targeted toward young professionals</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-12 home-title-md">
                <h4 class="text-left"> <i class="fa fa-chevron-left"></i> mission</h4>
            </div>
        </div>

        <div class="row">
            
            <div class="col-md-9 col-sm-12">
                <div class="text-center home-title-sm">
                    <h4>our value</h4>
                </div>
                <div class="card text-justify more-description">
                    <div class="card-body">
                        With FAITH, we do all we do with EXCELLENCE of heart and spirit to earn and build the TRUST of the environment, our clients and consumers, our partners, and the general public, 
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-12 home-title-md">
                <h4 class="text-left"> <i class="fa fa-chevron-left"></i> value</h4>
            </div>
        </div>
        
    </div>

  </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style scoped>
    .parent-div{
        /* width: 110%; */
    }

    .landing-page-div{
        width: 110%;
    }

    .main{
        border-radius: 100px 0px 0px 100px;
        background: url("~@/assets/images/colour_flowered_building.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .top-row{
        padding: 4em;
    }

    .top-row h2{
        color: #FFFFFF;
        text-align: justify;
        font-weight: 300;
    }

    .top-row h1{
        margin-top: 20%;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 38pt;
        line-height: 1.2em;
        letter-spacing: 0.05em;
    }

    .top-row h1 span{
        color: #FFFF00;
    }

    .top-row img{
        width: 10%;
        height: auto;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .who-we-are-div{
        padding: 0.5em 2em;
    }

    .who-we-are-div h2{
        color: #135273;
        font-style: italic;
    }

    .who-we-are-div .description{
        color: #135273;
    }

    .who-we-are-div h4{
        color: #135273;
        font-style: italic;
    }

    .who-we-are-div .fa{
        font-size: 0.5em;
        color: rgb(172, 175, 3);
    }

    .who-we-are-div .card{
        background: #2b6e92;
        color: #FFFFFF;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
    }

    .who-we-are-div .card:hover{
        /* background: #308abb; */
        background: #215774;
        color: #FFFFFF;
        transition: 0.8s;
    }

    .home-title-sm{
        display: none;
    }

    .home-title-md{
        display: block;
    }
    
    /* MOBILE VIEW STYLING */
    @media screen and (max-width: 425px){
        .parent-div{
            width: 100%;
        }

        .landing-page-div{
            width: 100%;
        }

        .main{
            border-radius: 0%;
        }

        .top-row{
            padding: 8em 2em;
        }

        .top-row h2{
            font-size: 1.5em;
            text-align: center;
        }

        .top-row h1{
            font-size: 2.5em;
            text-align: center;
        }

        .top-row img{
            display: none;
        }

        .who-we-are-div{
            padding: 0.5em 1em;
        }

        .who-we-are-div h4{
            margin-top: 1em;
        }

        .home-title-sm{
            display: block;
        }

        .home-title-md{
            display: none;
        }

    }

</style>
