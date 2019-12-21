<template>
  <div class="parent-div">
    <div class="main">
        <div class="row">
            <div class="col-md-10 col-sm-12">
                <!-- <h2> <img src="~@/assets/images/icon01.png" alt=""> Work with us as an expert</h2> -->
                <div style="display: flex;">
                    <img src="~@/assets/images/icon01.png" alt="">
                    <h2> Work with us as an expert</h2>
                </div>
                <div class="text-justify description">
                    <hr>
                    <p>We are hiring skilled practitioners in any of the fields of our services. The said employment will be contractual and shall be conclusive upon completion of the alloted contract.</p>
                    <p>We are particularly interested in persons with a wealth of experience in their area of expertise, but we also encourage young and not-too experienced practitioners.</p>
                    <p>Please, carefully review the terms and condiction <a href="#"><i>here</i></a> or <a href="#"><i>download a part of the terms and conditions</i></a>.</p>
                    <p>Kindly, send a visual evidence of your past jobs to <a href="info@havene.com">info@havene.com</a> together with other references and support documents to accentuate your expertise.</p>
                </div>
            </div>
            <div class="col-md-1 col-sm-12">
                <div class="line-div" style="border-right: 1px solid #135273; height: 100px;"></div>
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

    .row img{
        width: 7%;
        height: 7%;
        margin-right: 10px;
    }

    .description{
        color: #135273;
        font-weight: normal;
        padding: 0em 10% 0em 0em;
    }

    .description hr{
        border: 1px solid #13517342;
    }

    .line-div{
        display: block;
    }


    /* MOBILE VIEW STYLING */
    @media screen and (max-width: 425px){
        .parent-div{
            width: 100%;
        }

        .main{
            padding: 1.5em 2em;
            border-radius: 10px;
            box-shadow: none;
        }

        .row h2{
            font-weight: 500;
            font-size: 1.5em;
            letter-spacing: 0.02em;
            color: #135273;
        }

        .row img{
            width: 20%;
            height: 20%;
            margin-right: 10px;
        }

        .description{
            color: #135273;
            font-weight: normal;
            padding: 0em 0em 0em 0em;
        }

        .line-div{
            display: none;
        }
    }

</style>
