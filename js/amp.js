const trustedOrigins = ['https://pingutvplus.xyz'] // Adicione suas origens confiáveis aqui

window.addEventListener(
	'message',
	function (event) {
		if (!trustedOrigins.includes(event.origin)) {
			return // Ignora mensagens de origens não confiáveis
		}
		receiveMessage(event)
	},
	false
)

function receiveMessage(event) {
	if (event.data) {
		let msg
		try {
			msg = JSON.parse(event.data)
		} catch (err) {
			// Do nothing
		}
		if (!msg) {
			return false
		}
		if (msg.name === 'resize' || msg.name === 'rendered') {
			window.parent.postMessage(
				{
					sentinel: 'amp',
					type: 'embed-size',
					height: msg.data.height,
				},
				'*'
			)
		}
	}
}
