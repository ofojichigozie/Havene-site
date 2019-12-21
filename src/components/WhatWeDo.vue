<template>
  <div class="parent-div">
    <div class="main">
        <!-- <div class="row"> -->
            <!-- <div class="row">
                <div class="col-md-5 col-sm-6">
                    <img src="~@/assets/images/roof.jpg" class="img01" alt="">
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="list-div">
                        <div class="inner-list-div">
                            <h3>Roof Installation</h3>
                            <ul>
                                <li>New Contruction</li>
                                <li>Maintenance</li>
                                <li>Replacement</li>
                                <li>Coating and Restoration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-5 col-sm-6">
                    <div class="list-div">
                        <div class="inner-list-div">
                            <h3>Facades</h3>
                            <ul>
                                <li>Aluminium Composite Panel</li>
                                <li>Vegetative Green Wall</li>
                                <li>Wood Sidings</li>
                                <li>Wallpapering</li>
                                <li>Cement Fibre Board</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <img src="~@/assets/images/building02.jpg" class="img02" alt="">
                </div>
            </div> -->


            <div id="carousel-Indicators" class="wwd-desktop carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel-Indicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-Indicators" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col-md-5 col-sm-6">
                                <img src="~@/assets/images/roof.jpg" class="img01" alt="">
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="list-div">
                                    <div class="inner-list-div">
                                        <h3>Roof Installation</h3>
                                        <ul>
                                            <li>New Contruction</li>
                                            <li>Maintenance</li>
                                            <li>Replacement</li>
                                            <li>Coating and Restoration</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-md-5 col-sm-6">
                                <img src="~@/assets/images/building02.jpg" class="img01" alt="">
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="list-div">
                                    <div class="inner-list-div">
                                        <h3>Facades</h3>
                                        <ul>
                                            <li>Aluminium Composite Panel</li>
                                            <li>Vegetative Green Wall</li>
                                            <li>Wood Sidings</li>
                                            <li>Wallpapering</li>
                                            <li>Cement Fibre Board</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carousel-Indicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel-Indicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <!-- For mobile vie only -->
            <div class="wwd-mobile">
                <div class="row">
                    <div class="col-md-5 col-sm-6">
                        <img src="~@/assets/images/roof.jpg" class="img01" alt="">
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="list-div">
                            <div class="inner-list-div">
                                <h3>Roof Installation</h3>
                                <ul>
                                    <li>New Contruction</li>
                                    <li>Maintenance</li>
                                    <li>Replacement</li>
                                    <li>Coating and Restoration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-3"></div>

                <div class="row">
                    <div class="col-md-5 col-sm-6">
                        <img src="~@/assets/images/building02.jpg" class="img01" alt="">
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="list-div">
                            <div class="inner-list-div">
                                <h3>Facades</h3>
                                <ul>
                                    <li>Aluminium Composite Panel</li>
                                    <li>Vegetative Green Wall</li>
                                    <li>Wood Sidings</li>
                                    <li>Wallpapering</li>
                                    <li>Cement Fibre Board</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <!-- </div> -->
        <div class="text-justify description">
            <p>With a nationwide reach, we offer access to the latest roof technology and materials with quality. Havene roof and facades is an expert in the installation, maintenance, replacement, coating, restoration, and construction of any roof system with environmental consciousness. Let the expert handle it.</p>
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

    .row .img01{
        width: 70%;
        height: auto;
        border-radius: 35px;
    }

    .row .img02{
        width: 60%;
        height: auto;
        border-radius: 35px;
    }

    .list-div{
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        margin-left: -5em;
    }

    .inner-list-div{
        line-height: 2.5em;
        color: #135273;
        font-weight: 500;
        padding: 0px 20% 0px 0px;
        border-right: 1px solid #1351739f;
    }

    .description{
        color: #135273;
        /* font-weight: 500; */
        padding: 0em 10% 0em 0em;
    }

    .wwd-desktop{
        display: block;
    }

    .wwd-mobile{
        display: none;
    }


    /* MOBILE VIEW STYLING */
    @media screen and (max-width: 425px){
        .parent-div{
            width: 100%;
        }

        .main{
            padding: 1.5em 2em;
            border-radius: 10px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
        }

        .row .img01{
            width: 100%;
            height: auto;
            border-radius: 15px;
        }

        .list-div{
            height: 100%;
            display: flex;
            justify-content: start;
            align-items: center;
            margin-top: 1em;
            margin-left: 0em;
        }

        .inner-list-div{
            line-height: 1.8em;
            color: #135273;
            font-weight: 500;
            padding: 0px 20% 0px 0px;
            border-right: none;
        }

        .inner-list-div h3{
            font-size: 1.5em;
        }

        /* .description{
            color: #135273;
            padding: 0em 10% 0em 0em;
        } */

        .description{
            margin-top: 1em;
            padding: 1em;
            border-radius: 10px;
            background-color: #2b6e92;
            color: #FFFFFF;
            /* padding: 0em 10% 0em 0em; */
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
        }

        .wwd-desktop{
            display: none;
        }

        .wwd-mobile{
            display: block;
        }
    }

</style>
