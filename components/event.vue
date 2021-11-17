<template lang="pug">
.event-wrapper.px-10.pt-8.pb-10
	p.small.focus.secondary--text 7 november 2021, 11.00-17.00, De Witte Hoeve Venray
	h2.mt-4 Spirituele Beurs
	p.mt-2 In november zijn wij te vinden op de spirituele beurs in Venray om meer te vertellen over mijn praktijk en mensen te healen.
	v-btn.gradient.mt-2.text-none.hover--white(color="tertiary" outlined rounded nuxt x-large href="http://likrali.nl/agenda/event/spirituele-beurs-likrali/")
		| Meer informatie
		img.ml-6(src="~/assets/arrow-right.svg")
</template>

<style lang="sass">
.event-wrapper
	background-color: #ECF4F7
	border-radius: 8px 64px
.v-btn.hover--white:hover
	color: #FFF !important
</style>
