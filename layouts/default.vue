<template lang="pug">
v-app(light)
	v-main
		main-nav
		nuxt(style="margin-top: 232px")
</template>

<script>
import MainNav from '@/components/main-nav'

export default {
	components: { MainNav },
}
</script>

<style lang="sass">
.v-main
	background-image: url('~assets/ellipse.svg')
	background-position: right -256px top -307px
</style>
