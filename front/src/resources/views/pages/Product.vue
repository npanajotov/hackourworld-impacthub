<template>
    <div class="product">
        <div class="left-side">
            <p>Ovaj proizvod sadrži sledece alergene:</p>
            <hr>
            <p><strong>Alergeni</strong></p>
            <ul>
                <li>
                    <div class="alergen-img">
                        <img src="../../../../public/peanut_icon.png" alt="">
                    </div>
                    <div class="vline"></div>
                    <div class="alergen-content">
                        <h4 class="green-text text-uppercase">
                            Kikiriki
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </li>
                <li>
                    <div class="alergen-img">
                        <img src="../../../../public/peanut_icon.png" alt="">
                    </div>
                    <div class="vline"></div>
                    <div class="alergen-content">
                        <h4 class="green-text text-uppercase">
                            Kikiriki
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </li>
                <li>
                    <div class="alergen-img">
                        <img src="../../../../public/peanut_icon.png" alt="">
                    </div>
                    <div class="vline"></div>
                    <div class="alergen-content">
                        <h4 class="green-text text-uppercase">
                            Kikiriki
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="middle-side">
            <img src="../../../../public/smokic.png" alt="">
        </div>

        <div class="right-side">
            <div class="right-side-header">
                <h2><strong>Smoki</strong>
                    <small>Soko Štark, Srbija</small>
                </h2>
                <p class="muted">50g/1.75oz</p>
                <div class="price-box">
                    57.99 RSD
                </div>
                <p class="description">
                    <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex fuga fugiat nihil perferendis
                        totam. Illum.</em>
                    <strong class="green-text">VEGAN</strong>
                    <strong class="green-text" > FRENDLY</strong>

                </p>
            </div>
            <div class="right-side-content">
                <p class="text-uppercase"><strong>Sastav</strong></p>
                <Chart></Chart>
            </div>

            <div class="right-side-footer-similar-products">
                <p class="text-uppercase"><strong>Slični roizvodi</strong></p>
                <similar-products/>
            </div>
        </div>
        <div class="grey-background"></div>
    </div>
</template>
<script>

    import Chart from './Chart';
    import SimilarProducts from '../components/products/Recommended';

    export default {
        components: {Chart, SimilarProducts},
        computed: {
            item: {
                get() {
                    return this.$store.getters.product;
                }
            }
        }
    }
</script>
<style lang="scss">

    ul {
        list-style: none;
    }
    p{

        em{
            margin-top: 10px;
        }
    }

    .product {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        position: absolute;

    }

    .right-side {
        width: 60%;
        padding-left: 200px;
        background: #ffffff;


        .right-side-content,
        .right-side-footer-simmilar-products,
        .right-side-header {
            padding: 0 20px;
        }

    }

    .left-side {
        padding: 20px 170px 0 50px;
        width: 40%;
        background: #333333;
        color: #f9f9f9;
        p:first-child {
            margin-top: 100px;
        }
        p:nth-of-type(2) {
            margin-top: 50px;
        }
    }

    .left-side, .right-side {
        height: 100%;
        z-index: 1;
    }

    .right-side{
       background-color: transparent;
    }
    .middle-side {
        z-index: 2;
        position: absolute;
        top: 160px;
        right: 0;
        left: -20%;
        bottom: 0;
        margin: auto;
        img {
            width: 300px;
            object-fit: cover;
            margin: 0 auto;
            display: table;
        }
    }

    .green-text {
        color: #0fbd71;
    }
#doughnut-chart{
max-width: 100%;
}
.right-side-content{
    height: 280px;
    div{
        height: 250px;
    }
}

    .alergen-content,
    .alergen-img,
    .vline {
        display: inline-block;
        vertical-align: middle;
    }

    .alergen-img {

        margin: 20px;
    }

    .vline {
        border-left: 1px solid white;
        height: 50px;
        margin: 0 20px;
    }
    .grey-background{
        position: absolute;
        width: 100%;
        top: 190px;
        height: 310px;
        left: 0;
        background-color: #eeeeee;
    }
    .description{
        em{
            font-style: italic;
            display: block;
        }
        strong{
            font-size: 12px;
            border-right: 1px solid grey;
            padding: 0 6px;

            &:last-child{
                border-right: none;
            }
            &:first-child{
                padding-left: 0;
            }
        }
    }

</style>