import data from '@/api/data'

export default{
	namespaced: true,
	state:{
		items: {
			name: '',
			title:'',
			titleMean: '',
			titleNoun: '',
			buttonText: '',
		},
	},

	getters: {

	},

	mutations: {
		setLandingData(state, data){
  		state.items.name = data.name;
  		state.items.title = data.title;
  		state.items.titleMean = data.title_mean;
  		state.items.titleNoun = data.title_noun;
  		state.items.buttonText = data.button_my_profile;
  	},
	},

	actions: {
		fetchData({commit}){
  		return new Promise ((resolve, reject) => {
  			data.getData(data => {
					commit('setLandingData', data)
					resolve();
				})
  		})
  	},
	}
}