const header = document.getElementsByTagName('header')[0]
const nav = document.getElementsByTagName('nav')[0]
const canHazBurger = document.querySelector('.canHazBurger')
const hero = document.querySelector('.hero')
const services = document.querySelectorAll('.services .cell')
const aside = document.querySelectorAll('.breakDown .cell')

const headerObsOptions = {
	root: null,
	threshold: 0,
	rootMargin: '-420px 0px 0px 0px',
}

const headerObserver = new IntersectionObserver(function (entries, observer) {
	entries.forEach(e => {
		header.classList.toggle('scrolled', !e.isIntersecting)
	})
}, headerObsOptions)

const cellsObsOptions = {
	root: null,
	threshold: 0,
	rootMargin: '0px 0px 0px 0px',
}

const cellsObserver = new IntersectionObserver(function (entries, observer) {
	entries.forEach(e => {
		let cell = e.target
		gsap.fromTo(cell, 1, { autoAlpha: 0, x: '-100%' }, { autoAlpha: 1, x: 0 })
	})
}, cellsObsOptions)

headerObserver.observe(hero)

aside.forEach(e => {
	cellsObserver.observe(e)
})

services.forEach(e => {
	cellsObserver.observe(e)
})

canHazBurger.addEventListener('click', e => {
	nav.classList.toggle('hidden')
	nav.classList.toggle('scrolled')
})

nav.addEventListener('click', e => {
	nav.classList.toggle('hidden')
})
