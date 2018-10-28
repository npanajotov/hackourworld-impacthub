<template>
  <div>
    <ad v-if="product === null"></ad>
    <product-item v-else></product-item>
  </div>
</template>
<script>
	import Ad from './Ad';
	import ProductItem from './Product';

	export default {
		components: {Ad, ProductItem},
		computed: {
			product() {
				return this.$store.getters.product;
			}
		},
		data() {
			return {}
		},

	}
</script>