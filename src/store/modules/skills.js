import data from '@/api/data';

export default {
	namespaced: true,
	state: {
		items: {
			skills: Object,
		},
	},

	mutations: {
		setSkillData(state, datas) {
			state.items.skills = datas.skills;
		},
	},

	actions: {
		fetchData({ commit }) {
			return new Promise((resolve) => {
				data.getData((item) => {
					commit('setSkillData', item);
					resolve();
				});
			});
		},
	},
};
