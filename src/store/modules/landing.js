import data from '@/api/data';

export default {
	namespaced: true,
	state: {
		items: {
			name: '',
			title: '',
			titleMean: '',
			titleNoun: '',
			buttonText: '',
		},
	},

	getters: {
	},

	mutations: {
		setLandingData(state, datas) {
			state.items.name = datas.name;
			state.items.title = datas.title;
			state.items.titleMean = datas.title_mean;
			state.items.titleNoun = datas.title_noun;
			state.items.buttonText = datas.button_my_profile;
		},
	},

	actions: {
		fetchData({ commit }) {
			return new Promise((resolve) => {
				data.getData((item) => {
					commit('setLandingData', item);
					resolve();
				});
			});
		},
	},
};
