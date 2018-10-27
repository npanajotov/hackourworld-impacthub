<template>
  <div id="app">
    <!--<app-header></app-header>-->
    <router-view/>
    <!--<app-footer></app-footer>-->
  </div>
</template>
<script>
	import Header from './components/layout/Header';
	import Footer from './components/layout/Footer';
	import Product from './pages/Product';

	export default {
		components: {'app-header': Header, 'app-footer': Footer, 'app-products': Product},
		created() {
			this.$store.commit('initSocket');
		},
		computed: {}
	}
</script>
<style src="../assets/scss/app.scss" lang="scss"></style>