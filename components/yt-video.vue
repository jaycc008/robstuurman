<template lang="html">
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/ajr9DBjItEQ"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		></iframe>
	</div>
</template>

<style scoped>
.video-container {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	width: 100%;
}
.video-container iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
