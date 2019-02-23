import Vue from 'vue';
import Vuex from 'vuex';
import landing from './modules/landing';
import abouts from './modules/abouts';
import skills from './modules/skills';
// import contacts from './modules/abouts'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		landing,
		abouts,
		skills,
		// contacts,
	},
	state: {

	},
	getters: {

	},
	mutations: {

	},
	actions: {

	},
});
