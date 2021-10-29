<template lang="pug">
v-container
	v-row.float-left#home.offset-anchor
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
		v-col.text-lg-left.text-center.pb-15(md="4")
			img(src="~/assets/zen.png")
		v-col
			portal-target(name="destination")

	v-row.float-left.mt-15.mb-5#about.offset-anchor
		v-col.offset-md-1.d-flex(cols="12" md="5" order-md="2")
			.about-me
				h1 Over Rob Stuurman
				.title2.mb-6 Ik stel me graag even voor
				p Ik ben geboren op 19 september 1957 te Hollandia, Nieuw Guinea. In de winter van '60-'61 zijn we met onze ouders verhuisd naar Nederland. Mijn praktijk voor Energetisch genezen voer ik in Sint-Oedenrode. Om dit uit te mogen voeren heb ik in 2001 tot 2003 bij het
					span.focus  Instituut voor energiewerk Mirre
					|  de opleiding tot regressietherapeut gevolgd en vervolgens de genezersopleiding afgerond.
				v-btn.mt-2.px-6.gradient.text-none.align-self-start(color="tertiary" height="48" outlined rounded nuxt)
					span Neem contact op
					img.ml-6(src="~/assets/arrow-down.svg")
		v-col.offset-1.offset-md-1.offset-sm-3(cols="10" sm="6" md="4" lg="3" order-md="1")
			.about-picture
				v-img.image-shadow(:src="require('~/assets/rob.png')")

	v-row.float-left.mt-15#treatments.offset-anchor
		v-col.offset-md-1.mb-16(md="8")
			h1 Energetische behandelingen
			.title2.mb-8 Als energetisch genezer kan ik u helpen bij psychische, emotionele en lichamelijke klachten, daar waar de reguliere medische zorg geen hulp meer kan bieden
			p Voor het energetisch behandelen stel ik mij in verbinding met de krachten van
				span.focus  zowel de aarde als de geestelijke wereld
				| . Het kosmische symbool ’Argoem’, dat afgebeeld is op de vloer, versterkt hierbij mijn verbinding en de kracht tot genezing.

	v-row.float-left.mb-md-16.mb-8
		v-col.offset-lg-1.offset-1.offset-sm-2.offset-md-0.mb-8(cols="10" md="5" xl="4" style="position:relative;")
			.purple-background.purple-background--left
			v-img(:src="require('~/assets/treatment-1.png')")
		v-col.offset-md-1.d-flex.my-auto.offset-1.offset-sm-2(cols="10" md="6" lg="4")
			p.small.treatment--text In de loop van de jaren heb ik een ontwikkeling in innerlijke groei doorgemaakt en heb ik mij daarbij opengesteld voor het
				span.small.treatment--text.focus  Christusbewustzijn
				| . Persoonlijk put ik dan ook mijn kracht uit de verbinding met God de Vader, Christus, Moeder Maria en de Engelen. Ik voel deze universele energie door mij heen stromen en gebruik deze via mijn handen om te genezen. 

	v-row.float-left.mb-md-16.mb-8
		v-col.offset-lg-1.d-flex.my-auto.offset-1.offset-sm-2.offset-md-0(cols="10" md="6" lg="4" order="2" order-md="1")
			p.small.treatment--text Onderdeel van de behandeling is het in balans brengen van de
				span.small.treatment--text.focus  chakra's
				| . Daarna laat ik mij intuïtief leiden door de gegeven energie. Op deze manier bereik ik goede resultaten bij geestelijke, psychische en traumatische klachten maar ook ter bestrijding van lichamelijke pijn in het algemeen zoals migraine en hoofdpijn.
		v-col.offset-md-1.offset-1.offset-sm-2.mb-8(cols="10" md="5" xl="4" style="position:relative;" order="1" order-md="2")
			.purple-background.purple-background--right
			v-img(:src="require('~/assets/treatment-2.png')")

	v-row.float-left.mb-md-16.mb-8
		v-col.offset-lg-1.offset-1.offset-sm-2.offset-md-0.mb-8(cols="10" md="5" xl="4" style="position:relative;")
			.purple-background.purple-background--left
			v-img(:src="require('~/assets/treatment-3.png')")
		v-col.offset-md-1.d-flex.flex-column.my-auto.offset-1.offset-sm-2(cols="10" md="6" lg="4")
			p.small.treatment--text Ook maak ik gebruik van de technieken van
				span.small.treatment--text.focus  Quantum Touch
				| . Hiermee kunnen er snelle en opzienbare resultaten worden bereikt bij lichamelijke klachten en pijnen. Dit in het bijzonder bij disbalans van het beenderstelsel en bijbehorende spieren, zoals scheefstand van heupen, de wervels van de rug, nek of schedel. Lichamelijke aandoeningen hebben echter vaak een geestelijke oorzaak. Dit komt uiteraard ook aan de orde tijdens de behandeling.

	v-row.mb-16.float-left#method.offset-anchor
		v-col.offset-md-1(cols="12" md="11")
			h1 Werkwijze
			.title2 Leer meer over hoe ik te werk ga
		v-col(lg="3" sm="6")
			.custom-card.big-shadow.d-flex.flex-sm-column.pa-8.rounded-lg
				v-img.image-holder(:src="require('~/assets/step-1.svg')" :height="$vuetify.breakpoint.mdAndUp ? 251 : undefined" contain)
				.step-text.ml-6.ml-sm-0.mt-sm-6
					p.text-sm-center
						| Eerst maken we telefonisch een
						span.focus  afspraak
		v-col(lg="3" sm="6")
			.custom-card.big-shadow.d-flex.flex-sm-column.pa-8.rounded-lg
				v-img.image-holder(:src="require('~/assets/step-2.svg')" :height="$vuetify.breakpoint.mdAndUp ? 251 : undefined" contain)
				.step-text.ml-6.ml-sm-0.mt-sm-6
					p.text-sm-center
						| Dan volgt er een
						span.focus  intakegesprek
		v-col(lg="3" sm="6")
			.custom-card.big-shadow.d-flex.flex-sm-column.pa-8.rounded-lg
				v-img.image-holder(:src="require('~/assets/step-3.svg')" :height="$vuetify.breakpoint.mdAndUp ? 251 : undefined" contain)
				.step-text.ml-6.ml-sm-0.mt-sm-6
					p.text-sm-center
						| Vervolgens gaan we
						span.focus  jouw levensloop
						|  en wensen na
		v-col(lg="3" sm="6")
			.custom-card.big-shadow.d-flex.flex-sm-column.pa-8.rounded-lg
				v-img.image-holder(:src="require('~/assets/step-4.svg')" :height="$vuetify.breakpoint.mdAndUp ? 251 : undefined" contain)
				.step-text.ml-6.ml-sm-0.mt-sm-6
					p.text-sm-center
						| De duur van een
						span.focus  behandeling
						|  kan variëren van 1-2 uur
		v-col.offset-1(cols="10" md="8")
			p Alternatieve genezing wil niet de plaats innemen van de reguliere medische zorg. Het is van belang om daarvan, waar mogelijk gebruik te blijven maken.

	v-row.mb-6#themes.offset-anchor
		v-col.offset-md-1(cols="12" md="8")
			h1 Thema avonden
			.title2 Naast energetisch genezen bieden we ook verschillende thema avonden met andere behandelaars aan.
	v-row.mb-6
		v-col.offset-lg-2.offset-md-1.offset-sm-2(cols="12" sm="8" md="5" lg="4")
			v-card.rounded-lg.full-height.d-inline-flex.flex-column(color="skin" flat)
				v-img.flex-md-grow-0(:src="require('~/assets/theme-1.png')")
				p.mx-8.mt-8.small.focus Behandelaar: Rob
				h2.mx-8.tertiary--text.mb-2.flex-grow-1 Infrarood massagetafel behandeling
				p.mx-8.small.tertiary--text.line-clamp De warmte die van de infrarood afkomt, zorgt voor een betere doorbloeding en afname van pijn. In combinatie met een behandeling zorgt dit voor een betere psychische, emotionele en lichamelijke gesteldheid.
				v-btn.mx-8.mb-8.gradient.text-none.align-self-start(color="tertiary" height="48" outlined rounded nuxt)
					span.small Aanmelden
					img.ml-3(src="~/assets/arrow-right.svg")
		v-col.offset-sm-2.offset-md-0(cols="12" sm="8" md="5" lg="4")
			v-card.rounded-lg.full-height.d-inline-flex.flex-column(color="skin" flat)
				v-img.flex-md-grow-0(:src="require('~/assets/theme-2.png')")
				p.mx-8.mt-8.small.focus Reiki Master: Lya
				h2.mx-8.tertiary--text.mb-2.flex-grow-1 Reiki healingavond
				p.mx-8.small.tertiary--text.line-clamp Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
				v-btn.mx-8.mb-8.gradient.text-none.align-self-start(color="tertiary" height="48" outlined rounded nuxt)
					span.small Aanmelden
					img.ml-3(src="~/assets/arrow-right.svg")
</template>

<style lang="sass">
.offset-anchor
	padding-top: 180px
	margin-top: -180px
	@media #{map-get($display-breakpoints, 'sm-and-down')}
		padding-top: 150px
		margin-top: -150px



.about-picture
	position: relative
	@media #{map-get($display-breakpoints, 'sm-and-down')}
		margin-top: 64px
	&::before
		content: ""
		z-index: 1
		position: absolute
		background-color: var(--v-skin-base)
		width: calc(100% + 80px)
		height: 100%
		left: -40px
		top: -40px
		@media #{map-get($display-breakpoints, 'sm-and-down')}
			width: calc(100% + 48px)
			left: -24px
			top: -24px
	div
		z-index: 10

.about-me
	display: flex
	flex-direction: column
	justify-content: space-around
	margin: auto

.purple-background
	background-color: #F1EBF5
	position: absolute
	top: -20px
	bottom: -20px
	width: 300%
	&--left
		right: 60px
	&--right
		left: 60px

.treatment--text
	@media #{map-get($display-breakpoints, 'md-only')}
		font-size: 14px !important
		line-height: 22px !important
	@media #{map-get($display-breakpoints, 'sm-and-down')}
		font-size: 16px !important
		line-height: 28px !important


.custom-card
	height: 100%
	.image-holder
		flex: 0 1 auto
		@media #{map-get($display-breakpoints, 'xs-only')}
			flex: 0 0 135px
	.step-text
		display: flex
		flex: 1 1 auto
		@media #{map-get($display-breakpoints, 'xs-only')}
			flex: 0 1 auto
		p
			margin: auto

.line-clamp
	text-overflow: ellipsis
	overflow: hidden
	display: -webkit-box !important
	-webkit-line-clamp: 2
	-webkit-box-orient: vertical
	white-space: normal
</style>
