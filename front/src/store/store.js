import Vue from 'vue';
import Vuex from 'vuex';
// import products from './products';
// import users from './users';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {},
	state: {
		socketProduct: '',
		socketUser: '',
		products: {
			list: [
				{
					uid: "383630303033373033343131390d",
					name: 'Guarana',
					description: 'Lorem ipsum',
					price: 51.99,
					tags: [
						"coffein",
						"water",
						"taurin",
						"calcium",
						"carbon dioxide",
						"preservative",
						"E150"
					],
					rating: 5,
					vegan: false,
					gmo: false,
					organic: false,
					weight: "0.25l",
					made_in: "Serbia"
				},
				{
					uid: "383630313530303131353033380d",
					name: "Milk Shake - Kravica",
					description: "Lorem ipsum",
					price: 60,
					tags: [
						"milk",
						"sugar",
						"aromas"
					],
					rating: 3.9,
					vegan: false,
					gmo: false,
					organic: false,
					weight: "0.22l",
					made_in: "Serbia"
				},
				{
					uid: "1037fa4",
					name: "Hobby - Hot sticks",
					description: "Lofem ipsum",
					price: 500,
					tags: [],
					rating: 4.5,
					vegan: false,
					gmo: false,
					organic: false,
					weight: "200g",
					made_in: "Serbia"
				},
				{
					uid: "36431e7e",
					name: "Flips",
					description: "Lorem ipsum",
					price: 30,
					tags: [
						"penauts"
					],
					rating: 4.9,
					vegan: false,
					gmo: false,
					organic: false,
					weight: "100g",
					made_in: "Serbia"
				},
				{
					uid: "31c024d9"
				},
				{
					uid: "c7e715a3",
					name: "Dove cream",
					description: "Lorem ipsum",
					price: 250,
					tags: [
						"glycerin",
						"liquidum",
						"aqua",
						"alcohol"
					],
					rating: 3.9,
					vegan: false,
					gmo: false,
					organic: false,
					weight: "75ml",
					made_in: "Romania"
				},
				{
					uid: "40e311bb",
					name: "Honey heart",
					description: "Lorem ipsum",
					price: 200,
					tags: [
						"honey",
						"sugar",
					],
					rating: 3.9,
					vegan: true,
					gmo: false,
					organic: false,
					weight: "150g",
					made_in: "Serbia"
				},
				{
					uid: "a06fc757"
				}
			],
			item: null,
		},
		user: {
			list: [
				{
					uid: 1,
					name: "Nikola",
					age: 25,
					allergic: [
						"penauts",
						"glycerin"
					]
				},
				{
					uid: 2,
					name: "Mikica",
					age: 25,
					allergic: [
						"alcohol"
					]
				},
				{
					uid: 3,
					name: "Marija",
					age: 25,
					allergic: [
						"coffein"
					]
				}
			],
			item: null,
		}
	},
	getters: {
		product: state => {
			let data = state.products.list.find(item => item.uid === state.products.item);
			return data ? data : null;
		}
	},
	mutations: {
		initSocket: (state) => {
			state.socketProduct = new WebSocket('ws://192.168.55.131:8000');
			state.socketProduct.onmessage = (response) => {
				console.log(response);
				state.products.item = response.data;
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
