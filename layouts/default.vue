<template lang="pug">
v-app(light)
	v-main
		blur
		main-nav
		nuxt.content
		v-footer.float-left.full-width#contact(padless)
			v-card.lightpurple(flat tile width="100%")
				v-container(fluid)
					v-row.my-5
						v-col(cols="12" md="3" order='1' order-mdAndUp='2')
							a(href="https://catcollectief.nl/")
								v-img.d-flex.mx-auto(:src="require('~/assets/cat_logo.svg')" max-width='200')
						v-col(cols="11" md="4" order='2' order-mdAndUp='1')
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
										a.address-line(href="https://goo.gl/maps/ypBniShYGVxh2tYJ7" rel="nofollow" target="_blank") Lupinestraat 15, 5492KD, Sint-Oedenrode
									li.d-inline-flex.address-list-item
										v-img.mr-4.flex-grow-0(:src="require('~/assets/event-images/souls_logo.svg')" height="40" width="40")
										a.address-line(href="https://www.facebook.com/soulsspirituelebeurs" rel="nofollow" target="_blank") Souls Spirituele Beurs
						v-col.my-n5.offset-md-1(cols="4" v-if="$vuetify.breakpoint.mdAndUp" order='3')
							.full-height.d-flex.justify-center
								v-img(:src="require('~/assets/argoem.png')" contain eager)
			.full-width.d-flex.justify-end.py-3.white
				v-menu(offset-y top)
					template(v-slot:activator="{ on, attrs }")
						a.small.mr-6.secondary--text.text-decoration-underline(v-bind="attrs" v-on="on") Credits
					v-list
						v-list-item(v-for="(credit, index) in credits" :key="index")
							v-list-item-title.small
								| {{credit.text}}
								a.secondary--text.text-decoration-underline(:href="credit.href" target="_blank")  {{credit.linktext}}
				.mr-6.small 2023 © Rob Stuurman
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
