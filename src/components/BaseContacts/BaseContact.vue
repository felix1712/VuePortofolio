<template src="./index.html"></template>

<script>
	import ContentHeading from '@/components/ContentHeadings/ContentHeading.vue';
	import BaseContactForm from '@/components/BaseContactForms/BaseContactForm.vue';

	export default {
		name: 'BaseContact',
		components: {
			ContentHeading,
			BaseContactForm,
		},
		props: {
			dataContact: Object,
		},
	};
</script>
