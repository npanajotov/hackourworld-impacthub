<template>
  <div id="app">
    <!--<app-header></app-header>-->
    <router-view/>
<<<<<<< HEAD
    <app-footer></app-footer>
      <!--<Vimage src="/Users/mikica/Downloads/ids/mikica/mikica1.jpg"></Vimage>-->
=======
    <!--<app-footer></app-footer>-->
>>>>>>> b4bd85c8c333f4acb02c7d017e30b8ee31b9ee50
  </div>
</template>
<script>
	import Header from './components/layout/Header';
	import Footer from './components/layout/Footer';
	import Vimage from './components/Image';
    import Product from './pages/Product';

	export default {
		components: {'app-header': Header, 'app-footer': Footer, 'app-products': Product, Vimage},
		created() {
			this.$store.commit('initSocket');
		},
		computed: {

		},
        methods: {

        }
	}
</script>
<style src="../assets/scss/app.scss" lang="scss"></style>