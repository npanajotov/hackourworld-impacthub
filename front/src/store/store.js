import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {},
	state: {
		socket: '',
		products: {
			list: [],
			item: '',
		}
	},
	mutations: {
		initSocket: (state) => {
			state.socket = new WebSocket('ws://192.168.55.131:8000');
			state.socket.onmessage = (response) => {
				console.log(response);
				state.products.item = response.data
			}
		},

	},
	actions: {}
});
