<template lang="pug">
component.event-card.big-shadow.rounded-lg.d-flex.flex-column.white(:class="{ 'event-card--featured': featured }" :is="event.href ? 'a' : 'div'" :href="event.href" :target="event.href ? '_blank' : null" :rel="event.href ? 'noopener' : null")
	.event-card__image(v-if="featured && event.img" :style="{ backgroundImage: 'url(' + event.img + ')' }" role="img" :aria-label="event.name")
	.event-card__body.d-flex.align-start.pa-5
		.event-card__date.d-flex.flex-column.align-center.mr-5
			span.day(v-if="event.from_date") {{ event.from_date }}-{{ event.date.getDate() }}
			span.day(v-else) {{ event.date.getDate() }}
			span.month {{ getDutchMonth }}
		.event-card__text.flex-grow-1
			.event-card__name.secondary--text {{ event.name }}
			.small
				strong {{ event.text_1 }}
			.small {{ event.text_2 }}
		v-icon.event-card__icon.ml-4(v-if="event.href" color="secondary" size="22") mdi-open-in-new
</template>

<style lang="sass">
.event-card
	text-decoration: none
	color: var(--v-primary-base) !important
	overflow: hidden
	transition: box-shadow 0.2s ease
	&:hover
		box-shadow: 0px 4px 16px 4px rgba(0, 0, 0, 0.08) !important

.event-card + .event-card
	margin-top: 16px

.event-card__image
	flex: 0 0 200px
	height: 200px
	background-size: cover
	background-position: center

.event-card__date
	min-width: 48px

.event-card__name
	font-family: 'Poppins'
	font-weight: 700
	font-size: 18px
	line-height: 28px
	margin-bottom: 2px

.day
	font-family: 'Poppins'
	font-weight: 700
	font-size: 24px
	line-height: 28px
	color: var(--v-tertiary-base)

.month
	font-family: 'Poppins'
	font-size: 14px
	line-height: 20px
	color: var(--v-tertiary-base)
</style>

<script>
export default {
	props: {
		event: {
			type: Object,
			required: true,
		},
		featured: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			months: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
		}
	},
	computed: {
		getDutchMonth() {
			return this.months[this.event.date.getMonth()]
		},
	},
}
</script>
