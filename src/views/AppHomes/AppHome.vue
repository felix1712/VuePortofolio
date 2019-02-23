<template src="./index.html"></template>

<script>
import data from '@/data/data.json';
import { mapState, mapActions } from 'vuex';
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

	methods: {
		...mapActions({
			fetchDataLanding: 'landing/fetchData',
			fetchDataAbout: 'abouts/fetchData',
			fetchDataSkills: 'skills/fetchData',
		}),
	},

	computed: {
		...mapState({
			landingData: state => state.landing.items,
			aboutData: state => state.abouts.items,
			skillsData: state => state.skills.items,
		}),
	},

	created() {
		this.loading = true;
		this.fetchDataLanding();
		this.fetchDataAbout();
		this.fetchDataSkills();
	},
};
</script>
