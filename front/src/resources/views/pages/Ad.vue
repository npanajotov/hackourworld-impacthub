<template>
  <div>
    <video-player class="video-player-box vjs-16-9" :options="playerOptions" :playsinline="false" ref="video"
                  @ended="onPlayerEnded($event)"/>
  </div>
</template>
<script>
	export default {
		data() {
			return {
				playerOptions: {
					muted: true,
					autoplay: 'muted',
					controlBar: {
						fullscreenToggle: true
					},
					sources: [{
						type: "video/mp4",
						src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
					}],
				}
			}
		},
		computed: {
			player() {
				return this.$refs.video.player;
			}
		},
		methods: {
			onPlayerEnded() {
				document.getElementsByClassName('vjs-play-control')[0].click()
			}
		}
	}
</script>
<style lang="scss">
  .video-js {
    width: 100%;
  }
</style>