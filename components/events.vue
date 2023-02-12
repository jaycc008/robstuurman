<template lang="pug">
.events-wrapper
	v-row
		v-col.offset-sm-1.offset-md-0.offset-lg-1
			.h1 Beurzen kalender
	event(v-for="(event, index) in upcomingEvents" :key="index" v-bind:event="event")

</template>

<style lang="sass"></style>

<script>
export default {
	data() {
		return {
			events: [
				{
					date: new Date('2023-02-26T18:00:00.000Z'),
					img: require('~/assets/zielsgelukkig.svg'),
					name: 'Zielsgelukkig Spirituele beurs',
					text_1: '11.00 - 17.00 Deurne.',
					text_2: 'Kloosterhotel Willibrordhaeghe (Vlierdenseweg 109)',
					href: 'https://zielsgelukkigverbinding.nl/',
				},
				{
					date: new Date('2023-03-19'),
					img: require('~/assets/einder.svg'),
					name: 'Spirituele beurs Lightning',
					text_1: '10.30 - 17.00 Someren-Eind.',
					text_2: 'M.F. Centrum De Einder (Einderplein 1)',
					href: 'https://www.facebook.com/events/703587454908443/',
				},
				{
					date: new Date('2023-03-26'),
					img: require('~/assets/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: new Date('2023-04-02'),
					img: require('~/assets/souls_logo.svg'),
					name: 'Spirituele beurs Souls',
					text_1: '10.00 - 17.00 Nijnsel.',
					text_2: 'De Beckart (Oude Lieshoutseweg 7)',
					href: 'https://www.facebook.com/events/694063912411987',
				},
				{
					date: new Date('2023-04-30'),
					img: require('~/assets/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: new Date('2023-05-28'),
					img: require('~/assets/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: new Date('2023-06-25'),
					img: require('~/assets/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: new Date('2023-07-30'),
					img: require('~/assets/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: new Date('2023-08-27'),
					img: require('~/assets/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: new Date('2023-09-24'),
					img: require('~/assets/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: new Date('2023-10-22'),
					img: require('~/assets/souls_logo.svg'),
					name: 'Spirituele beurs Souls',
					text_1: '10.00 - 17.00 Nijnsel.',
					text_2: 'De Beckart (Oude Lieshoutseweg 7)',
					href: '',
				},
				{
					date: new Date('2023-10-29'),
					img: require('~/assets/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: new Date('2023-11-05'),
					img: require('~/assets/likrali.svg'),
					name: 'LiKraLi',
					text_1: '11.00 - 17.00 Venray.',
					text_2: 'De Witte Hoeve (Gasstraat 5)',
					href:
						'https://www.facebook.com/groups/368354643682751/permalink/1593958921122311/',
				},
				{
					date: new Date('2023-11-26'),
					img: require('~/assets/einder.svg'),
					name: 'Spirituele beurs Lightning',
					text_1: '10.30 - 17.00 Someren-Eind.',
					text_2: 'M.F. Centrum De Einder (Einderplein 1)',
					href: '',
				},
				{
					date: new Date('2024-01-14'),
					img: require('~/assets/einder.svg'),
					name: 'Spirituele beurs Lightning',
					text_1: '10.30 - 17.00 Hapert.',
					text_2: '',
					href: '',
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

			return filteredEvents.slice(0, 3)
		},
	},
}
</script>
