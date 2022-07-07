<template lang="pug">
.event-wrapper.px-10.pt-8.pb-10
	p.small.focus.secondary--text 31 juli
	h2.mt-4 Buitenlust Vught
	p.mt-2 We staan zondag 31 juli weer op beurs Buitenlust in Vught
	v-btn.gradient.mt-2.text-none.hover--white(color="tertiary" target="_blank" outlined rounded nuxt x-large href="https://www.buitenlustvught.nl/mediumdagen/")
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
