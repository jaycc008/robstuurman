<template lang="pug">
v-container
	v-row.float-left
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
			img.zen(src="~/assets/zen.png")
		v-col
			portal-target(name="destination")
	

</template>

<script>
export default {}
</script>
