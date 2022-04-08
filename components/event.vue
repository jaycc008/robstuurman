<template lang="pug">
.event-wrapper.px-10.pt-8.pb-10
	p.small.focus.secondary--text 15 mei 2022, 11.00-17.00
	h2.mt-4 Paranormale beurs Steenbergen
	p.mt-2 Op 15 mei zijn we te vinden op de paranormale beurs in Steenbergen: 't Cromwiel (Krommeweg 1). De entree is gratis. Zien we je daar?
	v-btn.gradient.mt-2.text-none.hover--white(color="tertiary" target="_blank" outlined rounded nuxt x-large href="https://www.dezon2010.nl/Locatie%20Steenbergen.htm")
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
