<template lang="pug">
.blur
</template>

<style lang="sass">
.blur
	position: fixed
	height: 136px
	width: 100%
	z-index: 15
	background: linear-gradient(rgba(255, 255, 255, 0.3), transparent)
	backdrop-filter: blur(6px)
	@media #{map-get($display-breakpoints, 'md-only')}
		height: 120px
	@media #{map-get($display-breakpoints, 'sm-and-down')}
		height: 104px
</style>
