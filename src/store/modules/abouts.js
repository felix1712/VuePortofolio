import data from '@/api/data';

export default {
	namespaced: true,
	state: {
		items: {
			abouts: Object,
		},
	},
	getters: {

	},

	mutations: {
		setAboutData(state,datas){
			state.items.abouts = datas.about;
		}
	},

	actions: {
		fetchData({ commit }){
			return new Promise((resolve) => {
				data.getData((item) => {
					commit('setAboutData', item);
					resolve();
				});
			})
		}
	}
};