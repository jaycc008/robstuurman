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
					date: this.newDate(15, 3, 2026),
					img: require('~/assets/event-images/horus.svg'),
					name: 'Horus Paranormale Beurs',
					text_1: '11.00 - 17.00 Berlicum.',
					text_2: 'D\'n Durpsherd (Kerkswijk 61)',
					href: 'https://www.facebook.com/events/1601840687921949/',
				},
				{
					date: this.newDate(22, 3, 2026),
					img: require('~/assets/event-images/chapat_bewustzijn.svg'),
					name: 'Chapat Bewustzijnsbeurs',
					text_1: '10.00 - 17.00 Bergeijk.',
					text_2: 'Buurthuis Samen \'t Loo (Terlostraat 7)',
					href: 'https://hipsy.nl/event/186323-chapat-bewustzijns-beurs',
				},
				{
					date: this.newDate(12, 4, 2026),
					img: require('~/assets/event-images/souls_logo.svg'),
					name: 'Spirituele Beurs Souls',
					text_1: '10.00 - 17.00 Nijnsel.',
					text_2: 'De Beckart (Oude Lieshoutseweg 7, Sint-Oedenrode)',
					href: 'https://www.facebook.com/soulsspirituelebeurs',
				},
				{
					date: this.newDate(26, 4, 2026),
					img: require('~/assets/event-images/aisa.svg'),
					name: 'Aisa',
					text_1: '11.00 - 17.00 Den Bosch.',
					text_2: 'Sociaal Cultureel Centrum (De Helftheuvelpassage 115)',
					href: 'https://powermindbalance.nl/acties/',
				},
				{
					from_date: 26,
					date: this.newDate(28, 6, 2026),
					img: require('~/assets/event-images/chapat.svg'),
					name: 'Chapat Sjamanistisch Festival',
					text_1: 'Reusel.',
					text_2: 'De Wilgenspot (Lage Mierdsedijk)',
					href: 'https://www.chapatsjamanistischfestival.com/',
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
