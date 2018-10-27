<template>
  <div class="product">
    <div class="left-side">
      <p>Ovaj proizvod sadrzi sledece alergene:</p>
      <hr>
      <p><strong>Alergeni</strong></p>
      <ul>
        <li>
          <div class="alergen-img">

          </div>
          <div class="alergen-content">
            <h3 class="green-text text-uppercase">
              Kikiriki
            </h3>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div class="middle-side">
      <img src="/1037fa4.jpg" alt="">
    </div>

    <div class="right-side">
      <div class="right-side-header">
        <h2><strong>Smoki</strong>
          <small>Soko Stark, Srbija</small>
        </h2>
        <p class="muted">50g/1.75oz</p>
        <div class="price-box">
          57.99 RSD
        </div>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex fuga fugiat nihil perferendis totam. Illum.
          <strong class="green-text">VEGAN FRENDLY</strong>
        </p>
      </div>
      <div class="right-side-content">
        <p class="text-uppercase"><strong>Sastav</strong></p>
        <Chart></Chart>
      </div>

      <div class="right-side-footer-similar-products">
        <similar-products/>
      </div>


    </div>
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
  }

  .left-side {
    width: 40%;
    padding-right: 200px;
    background: #333333;
    color: #f9f9f9;
  }

  .left-side, .right-side {
    height: 100%;
  }

  .middle-side {
    position: absolute;
    top: 0;
    right: 0;
    left: -20%;
    bottom: 0;
    margin: auto;
    img {
      width: 300px;
      object-fit: cover;
      margin: 0 auto;
      display: table;
      border: 1px solid #ccc;
    }
  }

  .green-text {
    color: #0fbd71;
  }


</style>