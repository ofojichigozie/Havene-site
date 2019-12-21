<template>
  <div class="parent-div">
    <div class="main">
        <div class="row">
            <div class="col-md-10 col-sm-12">
                <!-- <h2><i class="fa fa-envelope icon"></i> Send us a message</h2> -->
                <div style="display: flex; align-items: baseline;">
                    <i class="fa fa-envelope icon"></i> 
                    <h2>Send us a message</h2>
                </div>
                <div class="text-justify description">
                    <hr>
                    <form>
                        <div class="form-group">
                            <!-- <label for="exampleInputEmail1">Email address</label> -->
                            <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter your name">
                        </div>
                        <div class="form-group">
                            <textarea name="" class="form-control" cols="30" rows="10" placeholder="Message"></textarea>
                        </div>
                        <input type="submit" class="btn" style="background: #135273; color: #FFFFFF;" value="Send"/>
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

    .row .icon{
        font-size: 2em;
        margin-right: 10px;
    }

    .description{
        color: #63737c;
        font-weight: 500;
        padding: 0em 10% 0em 0em;
    }

    .description hr{
        border: 1px solid #13517342;
    }

    input, textarea{
        border-radius: 10px;
    }

    input[type="text"], textarea{
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
            padding: 1.5em 1em;
            border-radius: 10px;
            box-shadow: none;
        }

        .row h2{
            font-weight: 500;
            font-size: 1.5em;
            letter-spacing: 0.02em;
            color: #135273;
        }

        .row .icon{
            font-size: 2em;
            margin-right: 10px;
        }

        .description{
            color: #63737c;
            font-weight: 500;
            padding: 0em 0em 0em 0em;
        }

        input, textarea{
            border-radius: 10px;
        }

        input[type="text"], textarea{
            background: #f1f3f5;
        }

        input[type="submit"]{
            width: 100%;;
        }

        .line-div{
            display: none;
        }
    }

</style>
