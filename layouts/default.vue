<template lang="pug">
v-app(light)
	v-main
		blur
		main-nav
		nuxt.content
		v-footer.float-left.full-width#contact(padless)
			.footer-block
				v-container(fluid)
					v-row.my-5
						v-col.offset-sm-1(cols="12" sm="10" md="5" lg="4")
							.full-height.d-flex.flex-column.justify-center
								.title2.mb-10 Zorg goed voor je zelf, neem gerust contact met me op
								ul
									li.d-inline-flex.address-list-item
										v-img.mr-4.flex-grow-0(:src="require('~/assets/mail.svg')" height="40" width="40")
										a.address-line(href="mailto:rob.stuurman@hotmail.com" rel="nofollow") rob.stuurman@hotmail.com
									li.d-inline-flex.address-list-item
										v-img.mr-4.flex-grow-0(:src="require('~/assets/phone.svg')" height="40" width="40")
										a.address-line(href="tel:+31613156955" rel="nofollow") 06 13156955
									li.d-inline-flex.address-list-item
										v-img.mr-4.flex-grow-0(:src="require('~/assets/gps.svg')" height="40" width="40")
										a.address-line(href="https://maps.app.goo.gl/nabQnSkFU4SsvGE79" rel="nofollow" target="_blank") Bezoekadres: Brouwerskampweg 21, 5691 PN, Son
									li.d-inline-flex.address-list-item
										v-img.mr-4.flex-grow-0(:src="require('~/assets/event-images/souls_logo.svg')" height="40" width="40")
										a.address-line(href="https://www.facebook.com/soulsspirituelebeurs" rel="nofollow" target="_blank") Souls Spirituele Beurs
						v-col.my-n5.offset-md-1.offset-lg-2(cols="4" v-if="$vuetify.breakpoint.mdAndUp")
							.full-height.d-flex.justify-end
								v-img(:src="require('~/assets/argoem.png')" contain position="center right" width="100%" eager)
			.footer-bottom.full-width.d-flex.justify-end.py-3.white
				v-menu(offset-y top)
					template(v-slot:activator="{ on, attrs }")
						a.small.mr-6.secondary--text.text-decoration-underline(v-bind="attrs" v-on="on") Credits
					v-list
						v-list-item(v-for="(credit, index) in credits" :key="index")
							v-list-item-title.small
								| {{credit.text}}
								a.secondary--text.text-decoration-underline(:href="credit.href" target="_blank")  {{credit.linktext}}
				.small 2024 © Rob Stuurman
</template>

<script>
import MainNav from '@/components/main-nav'

export default {
	components: { MainNav },
	data() {
		return {
			credits: [
				{
					text: 'Ontworpen door',
					linktext: 'Moor Design',
					href: 'http://souliamoor.nl/',
				},
				{
					text: 'Ontwikkeld door',
					linktext: 'Jayce Ardon',
					href: 'http://ja-development.nl/',
				},
				{
					text: 'Illustraties door',
					linktext: 'Freepik',
					href: 'https://www.freepik.com/',
				},
			],
		}
	},
}
</script>

<style lang="sass">
.v-main
	background-image: url('~assets/ellipse.svg')
	background-position: right -256px top -307px

	.content
		margin-top: 232px

	@media #{map-get($display-breakpoints, 'sm-and-down')}
		.content
			margin-top: 128px

// Footer: het lila vlak loopt links tot de rand en stopt rechts 30px voorbij de contentkolom,
// net als de paarse vlakken achter de foto's hoger op de pagina.
.footer-block
	position: relative
	width: 100%
	&::before
		content: ""
		position: absolute
		z-index: 0
		top: 0
		bottom: 0
		left: 0
		right: 0
		background-color: var(--v-lightpurple-base)
		@media #{map-get($display-breakpoints, 'md-and-up')}
			right: calc(8.3333% - 30px)
	> *
		position: relative
		z-index: 1

.footer-bottom
	padding-right: 20px
	@media #{map-get($display-breakpoints, 'md-and-up')}
		padding-right: calc(8.3333% - 30px)

.full-height
	height: 100%

.full-width
	width: 100%

.address-list-item
	width: 100%

.address-line
	line-height: 40px

.v-menu__content
	box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.04) !important
</style>
