<template src="./index.html"></template>

<script type="text/javascript">
	import BaseLanding from '@/components/BaseLandings/BaseLanding.vue';
	import BaseAbout from '@/components/BaseAbouts/BaseAbout.vue';
	import BaseSkill from '@/components/BaseSkills/BaseSkill.vue';

	export default{
		name: 'AppHome',
		components: {
			BaseLanding,
			BaseAbout,
			BaseSkill,
		},
	};

</script>
