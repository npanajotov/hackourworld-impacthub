<template>
  <div class="product">
    <div class="left-side">
      <p><strong>This product contains the following allergens:</strong></p>
      <hr>
      <ul>
        <li v-if="havePenauts()" :class="{danger: haveAlergy('penauts')}">
          <div class="alergen-img">
            <img src="/peanut_icon.png" alt="">
          </div>
          <div class="vline"></div>
          <div class="alergen-content">
            <h4 class="green-text text-uppercase">
              Penauts
            </h4>
            <p v-if="!haveAlergy('penauts')">
              Be careful if you alergic
            </p>
            <p v-else>
              YOU ARE ALLERGIC
            </p>
          </div>
        </li>
        <li v-if="haveCoffeine()" :class="{danger: haveAlergy('coffein')}">
          <div class="alergen-img">
            <img src="/coffein_icon.png" alt="">
          </div>
          <div class="vline"></div>
          <div class="alergen-content">
            <h4 class="green-text text-uppercase">
              Caffeine
            </h4>
            <p v-if="haveAlergy('coffein')">
              Be careful if you alergic
            </p>
            <p v-else>
              YOU ARE ALLERGIC
            </p>
          </div>
        </li>
        <li v-if="haveHoney()" :class="{danger: haveAlergy('honey')}">
          <div class="alergen-img">
            <img src="/honey_icon.png" alt="">
          </div>
          <div class="vline"></div>
          <div class="alergen-content">
            <h4 class="green-text text-uppercase">
              Honey
            </h4>
            <p v-if="haveAlergy('honey')">
              Be careful if you alergic
            </p>
            <p v-else>
              YOU ARE ALLERGIC
            </p>
          </div>
        </li>
        <li v-if="haveGluten()" :class="{danger: haveAlergy('gluten')}">
          <div class="alergen-img">
            <img src="/gluten_icon.png" alt="">
          </div>
          <div class="vline"></div>
          <div class="alergen-content">
            <h4 class="green-text text-uppercase">
              Gluten
            </h4>
            <p v-if="haveAlergy('gluten')">
              Be careful if you alergic
            </p>
            <p v-else>
              YOU ARE ALLERGIC
            </p>
          </div>
        </li>
        <li v-if="havePlastic()" :class="{danger: haveAlergy('plastic')}">
          <div class="alergen-img">
            <img src="/plastic_icon.png" alt="">
          </div>
          <div class="vline"></div>
          <div class="alergen-content">
            <h4 class="green-text text-uppercase">
              Plastic
            </h4>
            <p v-if="haveAlergy('plastic')">
              Be careful if you alergic
            </p>
            <p v-else>
              YOU ARE ALLERGIC
            </p>
          </div>
        </li>
        <li v-if="haveAlcohol()" :class="{danger: haveAlergy('alcohol')}">
          <div class="alergen-img">
            <img src="/alcohol_icon.png" alt="">
          </div>
          <div class="vline"></div>
          <div class="alergen-content">
            <h4 class="green-text text-uppercase">
              Alcohol
            </h4>
            <p v-if="haveAlergy('alcohol')">
              Be careful if you alergic
            </p>
            <p v-else>
              YOU ARE ALLERGIC
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
          <Chart :key="item.uid" :ingredients="[40, 20, 12, 39, 10]"></Chart>
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
			},
			user: {
				get() {
					return this.$store.getters.user;
				}
			},
		},
		methods: {
			getImg(uid) {
				return '/images/' + uid + '.png';
			},
			havePenauts() {
				return !!this.item.tags.find(item => item.includes('penauts'))
			},
			haveCoffeine() {
				return !!this.item.tags.find(item => item.includes('coffein'))
			},
			haveHoney() {
				return !!this.item.tags.find(item => item.includes('honey'))
			},
			haveGluten() {
				return !!this.item.tags.find(item => item.includes('gluten'))
			},
			havePlastic() {
				return !!this.item.tags.find(item => item.includes('plastic'))
			},
			haveAlcohol() {
				return !!this.item.tags.find(item => item.includes('alcohol'))
			},
			haveAlergy(val) {

				if (this.user) {
					console.log(val);
					return !!this.user.allergic.find(item => item.includes(val));
				}
			}
		}
	}
</script>
<style lang="scss">
  .danger {
    color: red !important;
  }

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
      max-height: 400px;
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
    padding-left: 140px;
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
      margin-top: -10px;
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
    padding-left: 140px;
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