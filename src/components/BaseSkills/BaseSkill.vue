<template src="./index.html"></template>

<script>
	import ContentHeading from '@/components/ContentHeadings/ContentHeading.vue';

	export default{
		name: 'BaseSkill',
		components: {
			ContentHeading,
		},
		props: {
			dataSkills: Object,
		},
	};
</script>
