<template src="./index.html"></template>

<script type="text/javascript">
	import data from '@/data/data.json';
	import {mapState, mapGetters, mapActions} from 'vuex'
	import BaseLanding from '@/components/BaseLandings/BaseLanding.vue';
	import BaseAbout from '@/components/BaseAbouts/BaseAbout.vue';
	import BaseSkill from '@/components/BaseSkills/BaseSkill.vue';
	import BaseContact from '@/components/BaseContacts/BaseContact.vue';

	export default {
		name: 'AppHome',
		components: {
			BaseLanding,
			BaseAbout,
			BaseSkill,
			BaseContact,
		},
		data() {
			return {
				allData: data,
			};
		},

		methods:{
			...mapActions({
				fetchData: 'landing/fetchData',
			}),
		},

		computed:{
			...mapState({
				landingData: state => state.landing.items
			}),
		},

		created () {
			this.loading = true;
			this.fetchData()
		}
	};

</script>
