<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>
<script>
	import Header from './components/layout/Header';
	import Footer from './components/layout/Footer';

	export default {
		components: {'app-header': Header, 'app-footer': Footer},
		created() {
			this.$store.commit('initSocket');
		},
		computed: {

		}
	}
</script>