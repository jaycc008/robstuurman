<template lang="pug">
.events-wrapper
	v-row
		v-col.offset-sm-1.offset-md-0.offset-lg-1
			.h1 Beurzen kalender
			//- span.focus Let op: De Souls Beurs is 14 april, op de website stond tot voor kort een incorrecte datum.
	event(v-for="(event, index) in upcomingEvents" :key="index" v-bind:event="event")

</template>

<style lang="sass"></style>

<script>
export default {
	data() {
		return {
			events: [
				{
					date: this.newDate(16, 3, 2025),
					img: this.requireImg('horus'),
					name: 'Paranormale Beurs Horus',
					text_1: '11.00 - 17.00 Berlicum.',
					text_2: 'Den Durpsherd (Kerkswijk 61)',
					href: 'https://www.facebook.com/stichtinghorus',
				},
				{
					date: this.newDate(6, 4, 2025),
					img: this.requireImg('haammaeker'),
					name: 'Spirituele Beurs',
					text_1: '11.00 - 17.00 Nijnsel.',
					text_2: 'Gemeensschapshuis D’n Haammaeker (Hoogstraat 2, Neer)',
					href: 'https://haammaeker.nl/save-the-date-spirituele-beurs/',
				},
				{
					date: this.newDate(13, 4, 2025),
					img: this.requireImg('souls_logo'),
					name: 'Spirituele beurs Souls',
					text_1: '10.00 - 17.00 Nijnsel.',
					text_2: 'De Beckart (Oude Lieshoutseweg 7)',
					href: 'https://www.facebook.com/soulsspirituelebeurs',
				},
			],
		}
	},
	computed: {
		sortedEvents() {
			const events = this.events
			const sorted = events.sort((a, b) => a.date - b.date)
			return sorted
		},
		upcomingEvents() {
			const filteredEvents = this.sortedEvents.filter(
				(event) => event.date > Date.now()
			)

			console.log(filteredEvents.slice(0, 3))

			return filteredEvents.slice(0, 3)
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
