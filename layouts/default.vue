<template lang="pug">
v-app(theme="light")
	v-main
		main-nav
		v-container
			nuxt
	v-footer(app)
		span &copy; {{ new Date().getFullYear() }}
</template>

<script>
import MainNav from '@/components/main-nav'
export default {
	components: { MainNav },
}
</script>
