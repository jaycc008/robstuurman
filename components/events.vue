<template lang="pug">
.events-wrapper
	v-row
		v-col.offset-sm-1.offset-md-0.offset-lg-1.pb-0
			.h1 Beurzen kalender
	client-only
		v-row
			v-col.offset-sm-1.offset-md-0.offset-lg-1(cols="12" sm="10" md="6" lg="5" v-if="featuredEvent")
				event(:event="featuredEvent" featured)
			v-col.offset-sm-1.offset-md-0(cols="12" sm="10" md="6" lg="5" v-if="otherEvents.length")
				event(v-for="(event, index) in otherEvents" :key="index" :event="event")

</template>

<style lang="sass"></style>

<script>
export default {
	data() {
		return {
			events: [
				{
					date: this.newDate(4, 10, 2026),
					name: 'Chapat Bewustzijnsbeurs',
					text_1: '10:00 - 17:00 Bergeijk',
					text_2: 'Buurthuis Samen \'t Loo (Terlostraat 7)',
				},
				{
					date: this.newDate(18, 10, 2026),
					featured: true,
					img: require('~/assets/souls-beurs.jpg'),
					name: 'Souls Spirituele beurs',
					text_1: '10:00 - 17:00 Nijnsel',
					text_2: 'De Beckart (Oude Lieshoutseweg 7, Sint-Oedenrode)',
					href: 'https://www.facebook.com/soulsspirituelebeurs',
				},
				{
					date: this.newDate(14, 3, 2027),
					name: 'Horus Paranormale Beurs',
					text_1: '11:00 - 17:00 Berlicum',
					text_2: 'D\'n Durpsherd (Kerkswijk 61)',
					href: 'https://stichtinghorus.nl/',
				},
				{
					date: this.newDate(18, 4, 2027),
					featured: true,
					img: require('~/assets/souls-beurs.jpg'),
					name: 'Souls Spirituele beurs',
					text_1: '10:00 - 17:00 Nijnsel',
					text_2: 'De Beckart (Oude Lieshoutseweg 7, Sint-Oedenrode)',
					href: 'https://www.facebook.com/soulsspirituelebeurs',
				},
			],
			now: 0,
		}
	},
	computed: {
		sortedEvents() {
			return [...this.events].sort((a, b) => a.date - b.date)
		},
		upcomingEvents() {
			if (!this.now) {
				return this.sortedEvents
			}
			return this.sortedEvents.filter((event) => event.date > this.now)
		},
		// Links staat altijd de eerstvolgende Souls beurs; is er geen, dan de eerstvolgende beurs.
		featuredEvent() {
			return (
				this.upcomingEvents.find((event) => event.featured) ||
				this.upcomingEvents[0] ||
				null
			)
		},
		// Rechts de andere beurzen, maximaal drie.
		otherEvents() {
			return this.upcomingEvents
				.filter((event) => event !== this.featuredEvent)
				.slice(0, 3)
		},
	},
	mounted() {
		this.now = Date.now()
	},
	methods: {
		newDate: (day, month, year) => {
			return new Date(year, month - 1, day, 18)
		},
	},
}
</script>
