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
			pastEvents: [
				{
					date: new Date(2023, 1, 26, 18),
					img: require('~/assets/event-images/zielsgelukkig.svg'),
					name: 'Zielsgelukkig Spirituele beurs',
					text_1: '11.00 - 17.00 Deurne.',
					text_2: 'Kloosterhotel Willibrordhaeghe (Vlierdenseweg 109)',
					href: 'https://zielsgelukkigverbinding.nl/',
				},
				{
					date: new Date(2023, 2, 19, 18),
					img: require('~/assets/event-images/einder.svg'),
					name: 'Spirituele beurs Lightning',
					text_1: '10.30 - 17.00 Someren-Eind.',
					text_2: 'M.F. Centrum De Einder (Einderplein 1)',
					href: 'https://www.facebook.com/events/703587454908443/',
				},
				{
					date: new Date(2023, 2, 26, 18),
					img: require('~/assets/event-images/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: new Date(2023, 3, 2, 18),
					img: require('~/assets/event-images/souls_logo.svg'),
					name: 'Spirituele beurs Souls',
					text_1: '10.00 - 17.00 Nijnsel.',
					text_2: 'De Beckart (Oude Lieshoutseweg 7)',
					href: 'https://www.facebook.com/events/694063912411987',
				},
				{
					date: new Date(2023, 3, 30, 18),
					img: require('~/assets/event-images/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: new Date(2023, 4, 28, 18),
					img: require('~/assets/event-images/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: new Date(2023, 4, 21, 18),
					img: require('~/assets/event-images/zielsgelukkig.svg'),
					name: 'Zielsgelukkig Spirituele beurs',
					text_1: '10.00 - 16.00 Berg en Dal.',
					text_2: 'Fletcher Hotel-Restaurant Erica (Molenbosweg 17)',
					href: 'https://www.facebook.com/events/6246930658650927',
				},
				{
					date: new Date(2023, 5, 11, 18),
					img: require('~/assets/event-images/einder.svg'),
					name: 'Spirituele beurs Lightning',
					text_1: '10.30 - 17.00 Someren-Eind.',
					text_2: 'M.F. Centrum De Einder (Einderplein 1)',
					href: '',
				},
				{
					date: new Date(2023, 5, 24, 18),
					img: require('~/assets/event-images/natuurhuisje.svg'),
					name: 'Leefstijl Feest',
					text_1: '11.00 - 16.00 Nederasselt.',
					text_2: 'Natuurhuisje (Sluisweg 1)',
					href: 'https://www.facebook.com/profile.php?id=100077136530443',
				},
				{
					date: new Date(2023, 5, 25, 18),
					img: require('~/assets/event-images/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: new Date(2023, 6, 2, 18),
					img: require('~/assets/event-images/zielsgelukkig.svg'),
					name: 'Zielsgelukkig Spirituele beurs',
					text_1: '10.00 - 16.00 Noordwijk.',
					text_2: 'Fletcher Hotel-Restaurant De Witte Raaf (Duinweg 117)',
					href: 'https://www.facebook.com/events/s/zielsgelukkig-festival/599935065332942/',
				},
				{
					date: new Date(2023, 6, 30, 18),
					img: require('~/assets/event-images/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: new Date(2023, 7, 26, 18),
					img: require('~/assets/event-images/bibliotheekoostland.svg'),
					name: 'Paranormale Beurs',
					text_1: '10.00 - 17.00 Bergschenhoek.',
					text_2: 'Bibliotheek Oostland (Wilhelminastraat 1A)',
					href: 'https://www.facebook.com/events/3691329454526363',
				},
				{
					date: new Date(2023, 7, 27, 18),
					img: require('~/assets/event-images/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
			],
			events: [
				{
					date: new Date(2023, 8, 24, 18),
					img: require('~/assets/event-images/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: new Date(2023, 9, 8, 18),
					text_logo: 'De Donderie',
					name: 'Roermond Spiritueel',
					text_1: '10.00 - 17.00 Roermond.',
					text_2: 'De Donderie (Donderbergweg 47)',
					href: 'https://www.facebook.com/profile.php?id=61551055863898',
				},
				{
					date: new Date(2023, 9, 15, 18),
					img: require('~/assets/event-images/souls_logo.svg'),
					name: 'Spirituele beurs Souls',
					text_1: '10.00 - 17.00 Nijnsel.',
					text_2: 'De Beckart (Oude Lieshoutseweg 7)',
					href: 'https://www.facebook.com/events/752166309720601?acontext=%7B%22event_action_history%22%3A[]%7D',
				},
				{
					date: new Date(2023, 9, 28, 18),
					name: 'Million Dreams Festival of Love, Freedom & Health',
					text_logo: 'Dorpshuis Zeddam',
					text_1: '11.00 - 17.00 Zeddam.',
					text_2: 'Het Dorpshuis (Gerrit Varwijckplein 25)',
					href: 'https://www.facebook.com/groups/571813376237192/permalink/6559883924096744/?sfnsn=mo&ref=share',
				},
				{
					date: new Date(2023, 9, 29, 18),
					img: require('~/assets/event-images/buitenlust.svg'),
					name: 'Maandelijkse mediumdagen (elke laatste zondag vd maand)',
					text_1: '10.00 - 17.00 Vught.',
					text_2: 'Koffie en Theetuin Buitenlust (Esscheweg 274A)',
					href: 'https://www.buitenlustvught.nl/mediumdagen/',
				},
				{
					date: new Date(2023, 10, 5, 18),
					img: require('~/assets/event-images/likrali.svg'),
					name: 'LiKraLi',
					text_1: '11.00 - 17.00 Venray.',
					text_2: 'De Witte Hoeve (Gasstraat 5)',
					href: 'https://www.facebook.com/groups/368354643682751/permalink/1593958921122311/',
				},
				{
					date: new Date(2023, 10, 12, 18),
					text_logo: 'Lievendaal',
					name: 'Heavenly Heart Spirituele beurs',
					text_1: '11.00 - 17.00 Eindhoven.',
					text_2: 'Gemeenschapscentrum Lievendaal (Lievendaalseweg 3)',
					href: 'https://www.facebook.com/groups/571813376237192/permalink/6505747856177018/?sfnsn=mo&ref=share',
				},
				{
					date: new Date(2023, 10, 26, 18),
					img: require('~/assets/event-images/einder.svg'),
					name: 'Spirituele beurs Lightning',
					text_1: '10.30 - 17.00 Someren-Eind.',
					text_2: 'M.F. Centrum De Einder (Einderplein 1)',
					href: 'https://gemeenschapshuis-de-einder.nl/',
				},
				{
					date: new Date(2024, 0, 14, 18),
					img: require('~/assets/event-images/einder.svg'),
					name: 'Spirituele beurs Lightning',
					text_1: '10.30 - 17.00 Hapert.',
					text_2: '',
					href: '',
				},
				{
					date: new Date(2024, 3, 1, 18),
					img: require('~/assets/event-images/bogerd.svg'),
					name: 'Bewust, Gezond & Alternatief Beurs',
					text_1: '11.00 - 16.00 Druten.',
					text_2: 'De Bogerd (Van Heemstraweg 53)',
					href: 'https://www.facebook.com/photo/?fbid=6206063586166638&set=a.458472610925793', // https://bogerddruten.nl/
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
