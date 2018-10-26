<template src="./index.html"></template>

<script>
	import ContentHeading from '@/components/ContentHeadings/ContentHeading.vue';

	export default{
		name: 'BaseAbout',
		components: {
			ContentHeading,
		},
		props: {
			dataAbout: Object,
		},
	};
</script>
