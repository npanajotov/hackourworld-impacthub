import Vue from 'vue'
import App from './resources/views/App.vue';
import router from './routes/router';
import store from './store/store';
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'


Vue.config.productionTip = false;

Vue.use(VueVideoPlayer);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
