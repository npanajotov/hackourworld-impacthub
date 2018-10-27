<template>
  <div>

  </div>
</template>
<script>
	export default {
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

</style>