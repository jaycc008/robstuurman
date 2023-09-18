<template lang="pug">
v-row.mb-1
	v-col.offset-sm-1.offset-md-0.offset-lg-1(cols="2" sm="1" height="108")
		.d-flex.flex-column.align-center.justify-center
			span.day {{event.date.getDate()}}
			span.month {{getDutchMonth}}
	v-col.d-none.d-md-flex.align-center.justify-center.lightpurple2(cols="2")
		v-img(:src="event.img" max-height="91" contain v-if="event.img")
		strong.m-auto.text-center(v-if="!event.img") {{event.text_logo}}
	v-col(cols="10" sm="9" lg="7")
		a(:href="event.href" target="_blank")
			.d-flex.justify-space-between.full-height
				.d-flex.flex-column
					.my-auto
						h2 {{event.name}}
						div
							strong {{event.text_1}}
							|  {{event.text_2}}
				img.pl-1(src="~/assets/arrow-right.svg" width="24")
</template>

<style lang="sass">
.day
	font-family: 'Poppins'
	font-weight: 700
	font-size: 24px
	line-height: 40px
	padding-top: 10px

.month
	font-family: 'Poppins'
	font-size: 16px
	line-height: 28px
</style>

<script>
export default {
	props: {
		event: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			months: [
				'Jan',
				'Feb',
				'Maa',
				'Apr',
				'Mei',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Okt',
				'Nov',
				'Dec',
			],
		}
	},
	computed: {
		getDutchMonth() {
			return this.months[this.event.date.getMonth()]
		},
	},
}
</script>
