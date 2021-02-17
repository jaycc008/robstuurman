<template lang="pug">
v-app(light)
	v-main
		main-nav
		nuxt.content
		v-footer(padless)
			v-card.lightpurple(flat tile width="100%")
				v-container
					v-row.my-5
						v-col.offset-md-1(cols="12" md="5")
							.full-height.d-flex.flex-column.justify-center
								h1 Contact
								.title2.mb-10 Zorg goed voor je zelf, neem gerust contact met me op
								ul
									li.d-inline-flex.address-list-item
										v-img.mr-4(:src="require('~/assets/mail.svg')" height="40" max-width="40")
										p.address-line rob.stuurman@hotmail.com
									li.d-inline-flex.address-list-item
										v-img.mr-4(:src="require('~/assets/phone.svg')" height="40" max-width="40")
										p.address-line 06 13 15 69 55
									li.d-inline-flex.address-list-item
										v-img.mr-4(:src="require('~/assets/home.svg')" height="40" max-width="40")
										p.address-line Lupinestraat 15, 5492KD, Sint-Oedenrode
						v-col.offset-md-1(cols="4" v-if="$vuetify.breakpoint.mdAndUp")
							.full-height.d-flex.justify-center
								v-img(:src="require('~/assets/argoem.png')" contain)
			.full-width.d-flex.justify-end.my-3
				v-menu(offset-y top)
					template(v-slot:activator="{ on, attrs }")
						a.small.mr-6.secondary--text.text-decoration-underline(v-bind="attrs" v-on="on") Credits
					v-list
						v-list-item(v-for="(credit, index) in credits" :key="index")
							v-list-item-title.small
								| {{credit.text}}
								a.secondary--text.text-decoration-underline(v-bind:href="credit.href" _target="_blank")  {{credit.linktext}}
				.mr-6.small 2020 © Rob Stuurman
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
					href: 'www.souliamoor.nl',
				},
				{
					text: 'Ontwikkeld door',
					linktext: 'Jayce Ardon',
					href: 'www.ja-development.nl',
				},
				{
					text: 'Illustraties door',
					linktext: 'Freepik',
					href: 'www.freepik.com',
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
