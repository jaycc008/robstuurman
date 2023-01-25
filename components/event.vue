<template lang="pug">
.event-wrapper.px-10.pt-8.pb-10
	p.small.focus.secondary--text 26 februari 2023 11.00 - 17.00
	h2.mt-4 Zielsgelukkig Spirituele Beurs - Kloosterhotel Willibrordhaeghe
	p.mt-2 Vlierdenseweg 109 te Deurne
	v-btn.gradient.mt-2.text-none.hover--white(color="tertiary" target="_blank" outlined rounded nuxt x-large href="https://zielsgelukkigverbinding.nl/")
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
