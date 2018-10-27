<template>
  <div>
    <pre>
   {{item}}
    </pre>
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