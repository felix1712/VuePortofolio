<template src="./index.html"></template>

<script>
	import BaseHeader from '@/components/BaseHeaders/BaseHeader.vue';
	import BaseButton from '@/components/BaseButtons/BaseButton.vue';

	export default{
		name: 'BaseLanding',
		components: {
			BaseHeader,
			BaseButton,
		},
		props: {
			dataLanding: Object,
		},
	};
</script>
