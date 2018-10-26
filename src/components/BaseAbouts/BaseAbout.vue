<template src="./index.html"></template>

<script>
	import ContentHeading from '@/components/ContentHeadings/ContentHeading.vue';

	export default{
		name: 'BaseAbout',
		components: {
			ContentHeading,
		},
		data(){
			return{
				aboutMeText: '',
			}
		},

		created(){
			this.aboutMeText = "Hello I’m Felix Andrean a Front-end developer, my first journey become a developer start at 2010, is simply dummy text 									of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
		}
	};
</script>
