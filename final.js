const canHazBurger = document.querySelector('.canHazBurger')
const nav = document.getElementsByTagName('nav')[0]
const header = document.getElementsByTagName('header')[0]
const hero = document.querySelector('.hero')

const headerObsOptions = {
	root: null,
	threshold: 0.75,
	rootMargin: '0px 0px 0px 0px',
}
const headerObserver = new IntersectionObserver(function (entries, observer) {
	entries.forEach(e => {
		header.classList.toggle('scrolled', !e.isIntersecting)
	})
}, headerObsOptions)

headerObserver.observe(hero)

canHazBurger.addEventListener('click', e => {
	nav.classList.toggle('hidden')
	nav.classList.toggle('scrolled')
})
