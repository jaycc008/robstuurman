<template lang="pug">
nav.big-shadow.mx-6.mx-lg-10.pr-md-4.mt-6.mt-lg-10
	v-img.logo.ml-4.my-4.ml-md-8(src="logo.svg" max-height="64" max-width="223" contain)
	ul.menu.d-none.d-md-flex
		li.menu-item(v-for="item in menuItems" :key="item.href")
			a.menu-link(:href="item.href") {{item.text}}
	.menu__button.c-pointer.d-flex.d-md-none.flex-column.justify-center(@click="overlay = !overlay")
		v-img.mt-2.align-self-center(:src="require('~/assets/hamburger.svg')" width="24" contain)
		.small.white--text.text-center.mt-1 menu
	v-overlay(:value="overlay" :opacity="1" color="skin")
		.top-bar.mx-6.mt-6.d-flex.justify-space-between
			v-img.ml-4.my-4(src="logo--partial.svg" contain)
			.menu__button.menu__button--mobile.c-pointer.d-flex.d-md-none.flex-column.justify-center(@click="overlay = false")
				v-img.mt-1.align-self-center(:src="require('~/assets/cross.svg')" width="24" contain)
				.small.primary--text.text-center sluit
		v-container.px-9.mt-4
			.title1.primary--text Navigeer naar...
			ul.mt-6
				li.menu-item.mb-4(v-for="item in menuItems" :key="item.href")
					v-btn.rounded-lg.primary--text.text-none.justify-start(:href="item.href" color="white" height="64" block depressed @click="overlay = false") {{item.text}}

</template>

<style lang="sass">
nav
	position: fixed
	height: 96px
	width: -webkit-fill-available
	display: flex
	flex-direction: row
	border-radius: 8px
	justify-content: space-between
	z-index: 20
	background-color: #FFF

	@media #{map-get($display-breakpoints, 'sm-and-down')}
		height: 80px

	.logo, .top-bar
		.v-image__image--contain
			background-position-x: left !important

	.menu
		.menu-link
			display: inline-flex
			flex-direction: column
			align-items: center
			justify-content: space-between
			padding: 32px 16px
			text-decoration: none
			font-size: 18px
			line-height: 32px
			white-space: nowrap

			&:hover
				font-weight: bold
				color: #7784C8
				letter-spacing: -0.285px

		.menu-link::after
			content: attr(data-text)
			content: attr(data-text) / ""
			height: 0
			visibility: hidden
			overflow: hidden
			user-select: none
			pointer-events: none
			font-weight: bold
			letter-spacing: -0.285px

			@media speech
				display: none

	.menu__button
		width: 72px
		height: 80px
		background-color: var(--v-primary-base)
		border-top-right-radius: 8px
		border-bottom-right-radius: 8px
		&:hover
			opacity: 0.92
			transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1)
		&.menu__button--mobile
			background-color: rgba(255, 255, 255, 0)
			height: 72px
			border-radius: 40px
			margin-top: 4px
			&:hover
				background-color: rgba(255, 255, 255, 0.6)
				transition: background-color 0.4s cubic-bezier(0.4, 0, 0.6, 1)

.v-overlay__content
	width: 100%
	height: 100%
	top: 0
	right: 0
	bottom: 0
	left: 0

.top-bar
	width: -webkit-fill-available
	height: 80px
</style>

<script>
export default {
	data() {
		return {
			menuItems: [
				{ href: '#home', text: 'Home' },
				{ href: '#about', text: 'Over' },
				{ href: '#treatments', text: 'Behandelingen' },
				{ href: '#themes', text: 'Thema avonden' },
				{ href: '#contact', text: 'Contact' },
			],
			overlay: false,
		}
	},
}
</script>
