<script>

	import {Doughnut} from 'vue-chartjs'

	export default {
		extends: Doughnut,
		props: ["ingredients"],
		mounted() {
			this.setData();
			this.renderChart(this.datacollection, this.options);
		},
		data() {
			return {
				datacollection: {
					labels: ['BILJNA MAST', 'KUKURUZNI GRIZ', 'SKROB', 'KIKIRIKI', 'SAHAROZA'],
					datasets: [],
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					responsiveAnimationDuration: 0,
					hover: {
						animationDuration: 0
					},
					legend: {
						position: 'right',
					},
				},
			}
		},
		methods: {
			setData() {
				// this.datacollection.dataset = [{
				// 	label: 'GitHub Commits',
				// 	backgroundColor: [
				// 		'#EF5030',
				// 		'#F6AD2A',
				// 		'#2D3E50',
				// 		'#158D74',
				// 		'#0fbd71'
				// 	],
				// 	data: this.ingredients
				// 	//[40, 20, 12, 39, 10],
				//
				// }];
				let item = {
					label: 'GitHub Commits',
					backgroundColor: [
						'#EF5030',
						'#F6AD2A',
						'#2D3E50',
						'#158D74',
						'#0fbd71'
					],
					data: this.ingredients
				};
				this.datacollection.datasets.push(item);
			}
		}

	}
</script>
