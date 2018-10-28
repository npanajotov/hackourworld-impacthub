import Vue from 'vue';
import Vuex from 'vuex';
import products from './products';
import users from './users';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {},
	state: {
		socketProduct: '',
		socketUser: '',
		products: {
			list: products,
			item: '',
		},
		user: {
			list: users,
			item: '',
		}
	},
	getters: {
		product: state => {
			let item = state.products.list.find(item => item.uid === state.products.item);

			return item ? item : null;
			// return state.products.list[2];
		}
	},
	mutations: {
		initSocket: (state) => {
			state.socketProduct = new WebSocket('ws://192.168.55.131:8000');
			state.socketProduct.onmessage = (response) => {
				console.log(response);
				state.products.item = parseInt(response.data)
			};

			// state.socketUser = new WebSocket('ws://192.168.55.59:3000');
			// state.socketUser.onmessage = (response) => {
			// 	console.log(response);
			// 	state.users.item = parseInt(response.data)
			// }
		},

	},
	actions: {}
});
