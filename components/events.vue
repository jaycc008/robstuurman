<template lang="pug">
.events-wrapper
	v-row
		v-col.offset-sm-1.offset-md-0.offset-lg-1
			.h1 Beurzen kalender
			//- span.focus Let op: De Souls Beurs is 14 april, op de website stond tot voor kort een incorrecte datum.
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
					date: this.newDate(6, 4, 2025),
					img: this.requireImg('haammaeker'),
					name: 'Spirituele Beurs',
					text_1: '11.00 - 17.00 Neer.',
					text_2: 'Gemeensschapshuis D’n Haammaeker (Hoogstraat 2)',
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
				{
					date: this.newDate(21, 4, 2025),
					img: require('~/assets/event-images/bogerd.svg'),
					name: 'Bewust, Gezond & Alternatief Beurs',
					text_1: '11.00 - 17.00 Druten.',
					text_2: 'De Bogerd (Van Heemstraweg 53)',
					href: 'https://www.facebook.com/events/544328485072431/', // https://bogerddruten.nl/
				},
				{
					date: this.newDate(27, 4, 2025),
					img: require('~/assets/event-images/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: this.newDate(24, 5, 2025),
					name: 'Vanuit Verbinding Volkel',
					text_1: '11.00 - 17.00 Volkel.',
					text_2: 'KC Uden (Zeelandsedijk 18)',
					href: 'https://www.facebook.com/events/549075674147762',
				},
				{
					date: this.newDate(25, 5, 2025),
					img: require('~/assets/event-images/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: this.newDate(22, 6, 2025),
					img: require('~/assets/event-images/zielsgelukkig.svg'),
					name: 'Zielsgelukkig Spirituele beurs',
					text_1: '11.00 - 17.00 Berg en Dal.',
					text_2: 'Fletcher Erica (Molenbosweg 17)',
					href: 'https://zielsgelukkigverbinding.nl/',
				},
				{
					from_date: 26,
					date: this.newDate(29, 6, 2025),
					text_logo: 'Chapat',
					name: 'Chapat Sjamanistisch Festival',
					text_1: '10.00 - 17.00 Reusel.',
					text_2: 'Terrein de Wilgenspot (Langemiersedijk)',
					href: 'https://www.facebook.com/ChapatSjamanistischFestival',
				},
				{
					date: this.newDate(13, 7, 2025),
					text_logo: 'Aisa',
					name: 'Aisa',
					text_1: '11.00 - 17.00 Den Bosch.',
					text_2: 'Sociaal Cultureel Centrum (De Helftheuvelpassage 115)',
					href: 'https://powermindbalance.nl/acties/',
				},
				{
					date: this.newDate(27, 7, 2025),
					img: require('~/assets/event-images/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: this.newDate(3, 8, 2025),
					img: require('~/assets/event-images/zielsgelukkig.svg'),
					name: 'Zielsgelukkig Spirituele beurs',
					text_1: '11.00 - 17.00 Baarlo.',
					text_2: 'Fletcher Chateau de Raaij (Raayerveldlaan 6)',
					href: 'https://zielsgelukkigverbinding.nl/',
				},
				{
					date: this.newDate(23, 8, 2025),
    				text_logo: 'Nieuwe Maan',
					name: 'Nieuwe Maan Drumcirkel',
					text_1: '13.00 - 17.00 Valkenswaard.',
					text_2: 'Het Paardenparadijs (Maastrichterweg 96)',
					href: 'https://www.facebook.com/StichtingAtlantica',
				},
				{
					date: this.newDate(24, 8, 2025),
					img: require('~/assets/event-images/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: this.newDate(28, 9, 2025),
					img: require('~/assets/event-images/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: this.newDate(19, 10, 2025),
					img: this.requireImg('souls_logo'),
					name: 'Spirituele beurs Souls',
					text_1: '10.00 - 17.00 Nijnsel.',
					text_2: 'De Beckart (Oude Lieshoutseweg 7)',
					href: 'https://www.facebook.com/soulsspirituelebeurs',
				},
				{
					date: this.newDate(26, 10, 2025),
					img: require('~/assets/event-images/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: this.newDate(14, 12, 2025),
					text_logo: 'Aisa',
					name: 'Aisa',
					text_1: '11.00 - 17.00 Den Bosch.',
					text_2: 'Sociaal Cultureel Centrum (De Helftheuvelpassage 115)',
					href: 'https://powermindbalance.nl/acties/',
				},
			],
			showAll: false
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
