<template lang="pug">
v-container
	v-row.float-left.mb-16
		v-col.offset-xl-1(md="6")
			h1 Energetisch genezen
			.title1 Steeds heb ik een innerlijke gedrevenheid gevoeld om mensen bij te staan en langs spirituele weg te genezen.
			p.mt-8 Een bijzonder moment was die waarop mij een persoonlijk en kosmisch symbool 
				span.focus  Argoem
				|  en kosmische naam 
				span.focus  Lar
				|  werd aangereikt.
			portal(to="destination" v-bind:disabled="$vuetify.breakpoint.lgAndUp")
				event.mt-16
		v-col.text-lg-left.text-center(md="4")
			img(src="~/assets/zen.png")
		v-col
			portal-target(name="destination")
	v-row
		v-col.offset-md-1.d-flex(cols="12" md="5" order-md="2")
			.about-me
				h1 Over Rob Stuurman
				.title2.mb-6 Ik stel me graag even voor
				p Ik ben geboren op 19 september 1957 te Hollandia, Nieuw Guinea. In [jaartal] zijn we met onze ouders verhuisd naar Nederland. Mijn praktijk voor Energetisch genezen voer ik in Sint-Oedenrode. Om dit uit te mogen voeren heb ik in [jaartal] bij het
					span.focus  Instituut voor energiewerk Mirre
					|  de opleiding tot regressietherapeut gevolgd en vervolgens de genezersopleiding afgerond.
		v-col.offset-1.offset-md-1(cols="10" md="4" order-md="1")
			.about-picture
				v-img.image-shadow(:src="require('~/assets/rob.png')")

</template>

<style lang="sass">
.about-picture
	position: relative
	margin-top: 80px
	@media #{map-get($display-breakpoints, 'sm-and-down')}
		margin-top: 64px
	&::before
		content: ""
		z-index: 1
		position: absolute
		background-color: var(--v-skin-base)
		width: calc(100% + 80px)
		height: 100%
		left: -40px
		top: -40px
		@media #{map-get($display-breakpoints, 'sm-and-down')}
			width: calc(100% + 48px)
			left: -24px
			top: -24px
	div
		z-index: 10

.about-me
	display: flex
	flex-direction: column
	justify-content: space-around
	margin: auto
</style>
