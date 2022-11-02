<template lang="pug">
.event-wrapper.px-10.pt-8.pb-10
	p.small.focus.secondary--text 6 november 2022 van 11.00 - 17.00
	h2.mt-4 Paranormale beurs Likrali
	p.mt-2 Witte hoeve wasstraat 5
	v-btn.gradient.mt-2.text-none.hover--white(color="tertiary" target="_blank" outlined rounded nuxt x-large href="http://likrali.nl/agenda/event/beurs-likrali/")
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
