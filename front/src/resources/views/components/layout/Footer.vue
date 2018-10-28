<template>
  <div v-if="user" class="footer">
    Hello, {{user.name}}
  </div>
</template>
<script>
	export default {
		data() {
			return {
				show: false,
			}
		},
		computed: {
			user() {
				return this.$store.getters.user;
			}
		}
	}
</script>
<style lang="scss">
  .footer {
    z-index: 99;
    background: #0fbd71;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    padding: 10px 0;
    font-size: 20px;
  }
</style>