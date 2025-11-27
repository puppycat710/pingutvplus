// Adiciona evento de clique ao botão de pesquisa
document.getElementById('search-button').addEventListener('click', () => {
	const searchInput = document.getElementById('search-input').value
	// Chama a função para buscar e exibir filmes
	fetchAndDisplayMovies(searchInput)
})

function fetchAndDisplayMovies(query) {
	// Faz o fetch do arquivo sitemap.xml
	fetch('/sitemap.xml')
		.then((response) => response.text())
		.then((data) => {
			const parser = new DOMParser()
			const xmlDoc = parser.parseFromString(data, 'application/xml')

			// Pega todos os elementos <url> dentro do sitemap
			const urls = xmlDoc.getElementsByTagName('url')

			const movieList = document.getElementById('movie-list')
			movieList.innerHTML = '' // Limpa a lista de filmes antes de adicionar novos resultados

			// Função para filtrar os filmes no sitemap
			Array.from(urls).forEach((urlNode) => {
				const loc = urlNode.getElementsByTagName('loc')[0].textContent
				const title = loc.split('/').slice(-2, -1)[0]
				const filmeFormatado = title
					.replace(/-/g, ' ') // Substituir hífens por espaços
					.replace(/\b\w/g, (letra) => letra.toUpperCase()) // Tornar a primeira letra de cada palavra maiúscula
				// Se o título contiver o termo de pesquisa, exibe o filme
				if (title.toLowerCase().includes(query.toLowerCase())) {
					const movieElement = document.createElement('a')
					movieElement.href = loc
					movieElement.innerHTML = `
						<div class="flex items-center gap-1 p-1 movie-item">
							<h1 class="sm:text-sm text-xs">${filmeFormatado}</h1> - <a class="text-xs text-[#3171A7] hover:text-[#23527C] focus:underline active:underline" href="${loc}" >Assistir</a>
						</div>
					`
					movieList.appendChild(movieElement)
				}
			})
		})
		.catch((err) => console.error('Erro ao carregar o sitemap:', err))
}
// Metodo RedeCanais
// document
// 	.getElementById('search-input')
// 	.addEventListener('keydown', function (event) {
// 		if (event.key === 'Enter') {
// 			event.preventDefault()
// 			document.getElementById('search-button').click()
// 		}
// 	})
