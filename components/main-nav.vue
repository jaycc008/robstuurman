<template lang="pug">
nav.default-shadow
	v-img.logo(src="logo.svg" max-height="64" max-width="223" contain)
	ul.menu(class=classes)
		each title in ["Home", "Over", "Behandelingen", "Thema avonden", "Contact"]
			li.menu-item
				a.menu-link(href="#0", data-text=title)= title
</template>

<style lang="sass">
nav
	position: fixed
	height: 96px
	width: calc(100% - 80px)
	padding-right: 16px
	margin: 40px 40px 0
	display: flex
	flex-direction: row
	border-radius: 8px
	justify-content: space-between
	z-index: 10
	background-color: #FFF

	.logo
		margin: 16px 32px

	.menu
		--bold: 700

		display: flex

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
				font-weight: var(--bold)
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
			font-weight: var(--bold)
			letter-spacing: -0.285px

			@media speech
				display: none
</style>
