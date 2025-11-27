const videoFrame = document.getElementById('video-frame')
const episodeInfo = document.getElementById('episode-info')

document.body.addEventListener('click', function (event) {
	const playEpisode = event.target.closest(
		'.play-episode-dublado, .play-episode-legendado, .play-episode-child'
	)

	if (playEpisode) {
		event.preventDefault()

		const player = document.getElementById('player')
		// Faz o scroll suave até a div alvo
		player.scrollIntoView({ behavior: 'smooth' })

		const link = playEpisode
		const videoSrc = link.getAttribute('data-src')
		const season = link.getAttribute('data-season')
		const episode = link.getAttribute('data-episode')
		const title = link.getAttribute('data-title')
		const language = link.getAttribute('data-language')

		if (videoSrc) {
			videoFrame.src = videoSrc
			episodeInfo.textContent = `${season} - ${episode}: ${title} (${language})`
			document.title = title // Atualiza o título da página
		} else {
			console.error('Video source not found.')
		}
	}
})
