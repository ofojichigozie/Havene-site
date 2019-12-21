<template>
  <div class="parent-div">
    <div class="main">
        <div class="row">
            <div class="col-md-10 col-sm-12">
                <h2>Who we are</h2>
                <hr style="border: 1px solid #135273;">
                <div class="text-justify description">
                    Havene roof and façade is an environment-focused company that exist to establish the right interior and exterior conditions where persons could live and work, and nurture a healthy living, by developing the right building envelope design and installation, and through this intervention foster environmental consciousness and responsiveness in Nigeria, West Africa and Sub-Sahara Africa
                </div>

                <h4 class="text-center">Our vision</h4>
                <div class="text-justify more-description">
                    To pioneer environment consciousness and responsiveness in housing reforms and infrastructural schemes in the Nigerian and African sphere, to the end that people across varying strata of society can live, work and recreate in environments that promotes their health and wellbeing.  
                </div>

                <h4 class="text-center">Our mission</h4>
                <div class="text-justify more-description">
                    <ol>
                        <li>Offer excellent building envelope (Roof and Façade) design and installation to foster sustainability and environmental consciousness in the building industry and the built environment.</li>
                        <li>Research new building envelope materials and technologies from around the world, and develop ways to integrate these findings into the local environment of interest.</li>
                        <li>Foster awareness and responsiveness in the general public and young professionals towards the environment.</li>
                        <li>Develop and operate an educational programme in sustainable building development particularly targeted toward young professionals</li>
                    </ol>
                </div>

                <h4 class="text-center">Our value</h4>
                <div class="text-justify more-description">
                    With FAITH, we do all we do with EXCELLENCE of heart and spirit to earn and build the TRUST of the environment, our clients and consumers, our partners, and the general public, 
                </div>
            </div>
            <div class="col-md-1 col-sm-12">
                <div style="border-right: 1px solid #135273; height: 100px;"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'WhatWeDo'
    }
</script>

<style scoped>
    .parent-div{
        width: 110%;
    }

    .main{
        padding: 1.5em 3.5em;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
    }

    .row h2{
        font-weight: 500;
        letter-spacing: 0.05em;
        color: #135273;
    }

    .description{
        color: #135273;
        font-weight: 500;
        /* padding: 0em 10% 0em 0em; */
    }

    .row h4{
        /* font-weight: bold; */
        /* width: 40%; */
        margin: 5% auto 10px auto;
        border-radius: 15px;
        background: #135173e7;
        color: #FFFFFF;
        padding: 3px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
    }

    .more-description{
        color: #135273;
        font-weight: 400;
        /* padding: 0em 10% 0em 0em; */
    }
</style>
