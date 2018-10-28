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
      <img :src="getImg(item.uid)" alt="">
    </div>

    <div class="right-side">
      <div class="right-side-header">
        <h2><strong>{{item.name}}</strong>
          <small>Made in {{item.made_in}}</small>
        </h2>
        <p class="muted">{{item.weight}}</p>
        <div class="price-box">
          {{item.price}} RSD
        </div>
        <p class="description">

          <strong v-if="item.vegan" class="green-text">VEGAN</strong>
          <strong v-if="item.organic" class="green-text"> ORGANIC</strong>
          <strong v-if="item.gmo" class="green-text"> GMO</strong>

        </p>
      </div>
      <div class="right-side-content">
        <p class="text-uppercase"><strong>Ingredients</strong></p>
        <div class="my-chart">
          <Chart></Chart>
        </div>
      </div>

      <div class="right-side-footer-similar-products">
        <p><strong>Similar products</strong></p>
        <similar-products/>
      </div>
    </div>
    <!--<div class="grey-background"></div>-->
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
		},
		methods: {
			getImg(uid) {
				return '/images/' + uid + '.png';
			}
		}
	}
</script>
<style lang="scss">

  ul {
    list-style: none;
  }

  p {

    em {
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

    background: #ffffff;
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

  .right-side {
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
      max-width: 300px;
      max-height: 300px;
      object-fit: cover;
      margin: 0 auto;
      display: table;
    }
  }

  .green-text {
    color: #0fbd71;
  }

  #doughnut-chart {
    max-width: 100%;
  }

  .right-side-header, .right-side-content {
    padding-left: 200px;
    small {
      margin-left: 15px;
      font-size: 16px;
    }
  }

  .right-side-content {
    position: relative;
    background: #d5d5d5;
    max-height: 300px;
    overflow: hidden;
    padding-top: 30px;
    padding-bottom: 30px;
    p {
      font-size: 20px;
    }
    canvas {
      /*width: 700px !important;*/
      height: 220px !important;
      margin-top: -30px;
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

  .right-side-footer-similar-products {
    padding-left: 200px;
    padding-top: 20px;
    p {
      font-size: 20px;
      margin: 0;
      text-align: left;
    }
  }

  .description {
    em {
      font-style: italic;
      display: block;
    }
    strong {
      font-size: 12px;
      border-right: 1px solid grey;
      padding: 0 6px;

      &:last-child {
        border-right: none;
      }
      &:first-child {
        padding-left: 0;
      }
    }
  }

  .my-chart {
    max-width: 70%;
  }

  .price-box {
    background: #333333;
    position: absolute;
    right: 0;
    top: 20px;
    font-size: 24px;
    font-weight: bold;
    padding: 10px 25px;
    color: #ffffff;
  }

</style>