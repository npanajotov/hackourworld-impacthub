import Vue from 'vue';
import Vuex from 'vuex';
import products from './products';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {},
	state: {
		socket: '',
		products: {
			list: products,
			item: '',
		}
	},
	getters: {
		product: state => {
			let item = state.products.list.find(item => item.uid === state.products.item);
			return item ? item : null;
		}
	},
	mutations: {
		initSocket: (state) => {
			state.socket = new WebSocket('ws://192.168.55.131:8000');
			state.socket.onmessage = (response) => {
				console.log(response);
				state.products.item = parseInt(response.data)
			}
		},

	},
	actions: {}
});
