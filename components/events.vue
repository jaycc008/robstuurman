<template lang="pug">
.events-wrapper
	v-row
		v-col.offset-sm-1.offset-md-0.offset-lg-1
			.h1 Beurzen kalender
			//- span.focus Let op: De Souls Beurs is 14 april, op de website stond tot voor kort een incorrecte datum.
	client-only
		event(v-for="(event, index) in upcomingEvents" :key="index" v-bind:event="event" v-if="showAll ? ()=>{} : index < 3")
	v-row
		v-col.offset-sm-1.offset-md-0.offset-lg-1
			v-btn.mt-2.pl-6.pr-4.gradient.text-none.align-self-start.hover--white(color="tertiary" height="48" outlined rounded nuxt @click="showAll = !showAll")
				span(v-if="!showAll") Bekijk alle beurzen
				img.ml-3(src="~/assets/arrow-down.svg" v-if="!showAll")
				span(v-if="showAll") Bekijk minder
				img.ml-3(src="~/assets/arrow-up.svg" v-if="showAll")

</template>

<style lang="sass"></style>

<script>
export default {
	data() {
		return {
			events: [
				{
					img: require('~/assets/event-images/souls_logo.svg'),
					name: 'Spirituele Beurs Souls',
					text_1: '10.00 - 17.00 Nijnsel.',
					text_2: 'De Beckart (Oude Lieshoutseweg 7, Sint-Oedenrode)',
					href: 'https://www.facebook.com/soulsspirituelebeurs',
				},
				{
					date: this.newDate(4, 10, 2026),
					img: require('~/assets/event-images/chapat.svg'),
					name: 'Chapat Bewustzijnsbeurs',
					text_1: '10.00 - 17.00 Bergeijk.',
					text_2: 'Buurthuis Samen \'t Loo (Terlostraat 7)',
				},
				{
					date: this.newDate(18, 10, 2026),
					img: require('~/assets/event-images/souls_logo.svg'),
					name: 'Spirituele Beurs Souls',
					text_1: '10.00 - 17.00 Nijnsel.',
					text_2: 'De Beckart (Oude Lieshoutseweg 7, Sint-Oedenrode)',
					href: 'https://www.facebook.com/soulsspirituelebeurs',
				},
				{
					date: this.newDate(18, 4, 2027),
					img: require('~/assets/event-images/souls_logo.svg'),
					name: 'Spirituele Beurs Souls',
					text_1: '10.00 - 17.00 Nijnsel.',
					text_2: 'De Beckart (Oude Lieshoutseweg 7, Sint-Oedenrode)',
					href: 'https://www.facebook.com/soulsspirituelebeurs',
				},
			],
			showAll: false,
			now: 0
		}
	},
	mounted() {
		this.now = Date.now()
	},
	computed: {
		sortedEvents() {
			const events = this.events
			const sorted = events.sort((a, b) => a.date - b.date)
			return sorted
		},
		upcomingEvents() {
			if (!this.now) {
				return this.sortedEvents
			}
			const filteredEvents = this.sortedEvents.filter(
				(event) => event.date > this.now
			)

			return filteredEvents
		},
	},
	methods: {
		newDate: (day, month, year) => {
			return new Date(year, month - 1, day, 18)
		},
		requireImg: src => {
			return require('~/assets/event-images/'+src+'.svg')
		},
	},
}
</script>
