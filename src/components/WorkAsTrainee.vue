<template>
  <div class="parent-div">
    <div class="main">
        <div class="row">
            <div class="col-md-10 col-sm-12">
                <!-- <h2> <img src="~@/assets/images/icon02.png" alt=""> Work with us as a trainee</h2> -->
                <div style="display: flex;">
                    <img src="~@/assets/images/icon02.png" alt="">
                    <h2>Work with us as a trainee</h2>
                </div>
                <div class="text-justify description">
                    <hr>
                    <p>As an organisation, Havene roof and facades takes it as part of our core mandate to train young persons that are interested in becoming skilled experts in building envelope design and installation</p>
                    <p>To enroll for our training programme, you are required to fill out the form below. Please, provide your correct information.</p>
                    <form>
                        <div class="form-group">
                            <!-- <label for="exampleInputEmail1">Email address</label> -->
                            <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter your name">
                        </div>
                        <div class="form-group">
                            <!-- <label for="exampleInputPassword1">Password</label> -->
                            <input type="text" class="form-control" placeholder="Enter your address">
                        </div>
                        <input type="submit" class="btn" style="background: #135273; color: #FFFFFF;" value="Submit"/>
                    </form>
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
        width: 5%;
        height: 5%;
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

    input{
        width: 50%;
        border-radius: 20px;
    }

    input[type="text"]{
        background: #f1f3f5;
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
            width: 12%;
            height: 12%;
            margin-right: 10px;
        }

        .description{
            color: #135273;
            font-weight: normal;
            padding: 0em 0em 0em 0em;
        }

        input{
            width: 100%;
            border-radius: 20px;
        }

        input[type="text"]{
            background: #f1f3f5;
        }

        .line-div{
            display: none;
        }
    }

</style>
