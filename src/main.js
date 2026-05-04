const url =
	'https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human'
const options = { method: 'GET', headers: { accept: 'application/json' } }

const container = document.getElementById('container')

try {
	const response = await fetch(url, options)
	const data = await response.json()

	const quotes = data.data.data

	container.innerHTML = quotes
		.map(item => {
			return `
		<div class="quote-card">
		<p class="quote-text">${item.content}</p>
						<div class="bottom">
							<span class="author">- ${item.author}</span>
							<span class="tag">${item.tags}</span>
						</div>
		</div>
		`
		})
		.join('')
} catch (error) {
	console.error('Error:', error)
}
