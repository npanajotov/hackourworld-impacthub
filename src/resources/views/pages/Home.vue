<template>
  <div>
    <ad v-if="$store.state.products.item === ''"></ad>
    <product-item v-else></product-item>
  </div>
</template>
<script>
	import Ad from './Ad';
	import ProductItem from './Product';

	export default {
		components: {Ad, ProductItem},
		data() {
			return {}
		},

	}
</script>