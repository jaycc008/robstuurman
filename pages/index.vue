<template lang="pug">
v-container
	v-row.float-left.mb-16
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
		v-col.text-lg-left.text-center(md="4")
			img(src="~/assets/zen.png")
		v-col
			portal-target(name="destination")
	v-row.float-left
		v-col.offset-md-1.d-flex(cols="12" md="5" order-md="2")
			.about-me
				h1 Over Rob Stuurman
				.title2.mb-6 Ik stel me graag even voor
				p Ik ben geboren op 19 september 1957 te Hollandia, Nieuw Guinea. In [jaartal] zijn we met onze ouders verhuisd naar Nederland. Mijn praktijk voor Energetisch genezen voer ik in Sint-Oedenrode. Om dit uit te mogen voeren heb ik in [jaartal] bij het
					span.focus  Instituut voor energiewerk Mirre
					|  de opleiding tot regressietherapeut gevolgd en vervolgens de genezersopleiding afgerond.
		v-col.offset-1.offset-md-1(cols="10" md="4" order-md="1")
			.about-picture
				v-img.image-shadow(:src="require('~/assets/rob.png')")
	v-row.float-left
		v-col.offset-md-1.mb-16(md="8")
			h1 Energetische behandelingen
			.title2.mb-6 Als energetisch genezer kan ik u helpen bij psychische, emotionele en lichamelijke klachten, daar waar de reguliere medische zorg geen hulp meer kan bieden
			p Alternatieve genezing wil niet de plaats innemen van de reguliere medische zorg. Het is van belang om daarvan, waar mogelijk gebruik te blijven maken.
		v-col(cols="12")
			.placeholder.d-flex.justify-center.align-center.mb-13 placeholder
	v-row.float-left.mb-16
		v-col.py-0.py-sm-5.offset-md-1(md="6" cols="12")
			p.mb-8 Voor het energetisch behandelen stel ik mij in verbinding met de krachten van
				span.focus  zowel de aarde als de geestelijke wereld
				| . Het kosmische symbool ’Argoem’, dat afgebeeld is op de vloer, versterkt hierbij mijn verbinding en de kracht tot genezing.
		v-col.py-0.py-sm-5.offset-md-1(md="5" cols="12" sm="6")
			p.small In de loop van de jaren heb ik een ontwikkeling in innerlijke groei doorgemaakt en heb ik mij daarbij opengesteld voor het
				span.small.focus  Christusbewustzijn
				| . Persoonlijk put ik dan ook mijn kracht uit de verbinding met God de Vader, Christus, Moeder Maria en de Engelen. Ik voel deze universele energie door mij heen stromen en gebruik deze via mijn handen om te genezen. 
			p.small Onderdeel van de behandeling is het in balans brengen van de
				span.small.focus  chakra's
				| . Daarna laat ik mij intuïtief leiden door de gegeven energie. Op deze manier bereik ik goede resultaten bij geestelijke, psychische en traumatische klachten maar ook ter bestrijding van lichamelijke pijn in het algemeen zoals migraine en hoofdpijn.
		v-col.py-0.py-sm-5(md="5" cols="12" sm="6")
			p.small Ook maak ik gebruik van de technieken van
				span.small.focus  Quantum Touch
				| . Hiermee kunnen er snelle en opzienbare resultaten worden bereikt bij lichamelijke klachten en pijnen. Dit in het bijzonder bij disbalans van het beenderstelsel en bijbehorende spieren, zoals scheefstand van heupen, de wervels van de rug, nek of schedel.
			p.small Lichamelijke aandoeningen hebben echter vaak een geestelijke oorzaak. Dit komt uiteraard ook aan de orde tijdens de behandeling.
	v-row.mb-16.float-left
		v-col(lg="3" sm="6")
			.custom-card.big-shadow.d-flex.flex-sm-column.pa-8.rounded-lg
				v-img.image-holder(:src="require('~/assets/step-1.svg')" max-height="251" contain)
				.step-text.ml-6.ml-sm-0.mt-sm-6
					p.text-sm-center
						| Eerst maken we telefonisch een
						span.focus  afspraak
		v-col(lg="3" sm="6")
			.custom-card.big-shadow.d-flex.flex-sm-column.pa-8.rounded-lg
				v-img.image-holder(:src="require('~/assets/step-2.svg')" max-height="251" contain)
				.step-text.ml-6.ml-sm-0.mt-sm-6
					p.text-sm-center
						| Dan volgt er een
						span.focus  intakegesprek
		v-col(lg="3" sm="6")
			.custom-card.big-shadow.d-flex.flex-sm-column.pa-8.rounded-lg
				v-img.image-holder(:src="require('~/assets/step-3.svg')" max-height="251" contain)
				.step-text.ml-6.ml-sm-0.mt-sm-6
					p.text-sm-center
						| Vervolgens gaan we
						span.focus  jouw levensloop
						|  en wensen na
		v-col(lg="3" sm="6")
			.custom-card.big-shadow.d-flex.flex-sm-column.pa-8.rounded-lg
				v-img.image-holder(:src="require('~/assets/step-4.svg')" max-height="251" contain)
				.step-text.ml-6.ml-sm-0.mt-sm-6
					p.text-sm-center
						| De duur van een
						span.focus  behandeling
						|  kan variëren van 1-2 uur
	v-row.mb-6
		v-col.offset-md-1(cols="12" md="8")
			h1 Thema avonden
			.title2 Naast energetisch genezen bieden we ook verschillende thema avonden met andere behandelaars aan.
	v-row.mb-6
		v-col.offset-md-2(cols="12" md="4")
			v-card.rounded-lg(color="skin" flat)
				v-img(:src="require('~/assets/theme-1.png')")
				.pa-8
					p.small.focus Behandelaar: Rob
					h2.tertiary--text.mb-2 Infrarood massagetafel behandeling
					p.small.tertiary--text.line-clamp De warmte die van de infrarood afkomt, zorgt voor een betere doorbloeding en afname van pijn. In combinatie met een behandeling zorgt dit voor een betere psychische, emotionele en lichamelijke gesteldheid.
					v-btn.gradient.text-none(color="tertiary" height="48" outlined rounded nuxt x-large)
						span.small Aanmelden
						img.ml-6(src="~/assets/arrow-right.svg")
		v-col(cols="12" md="4")
			v-card.rounded-lg(color="skin" flat)
				v-img(:src="require('~/assets/theme-2.png')")
				.pa-8
					p.small.focus Reiki Master: Lya
					h2.tertiary--text.mb-2 Reiki healingavond door Reikimaster Lya
					p.small.tertiary--text.line-clamp Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
					v-btn.gradient.text-none(color="tertiary" height="48" outlined rounded nuxt)
						span.small Aanmelden
						img.ml-3(src="~/assets/arrow-right.svg")
</template>

<style lang="sass">
.about-picture
	position: relative
	margin-top: 80px
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

.placeholder // temporary class to fill up space
	background-color: black
	color: white
	width: 100%
	height: 470px

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
