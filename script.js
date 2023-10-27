const btn = document.querySelector('button')

const btnAnimation = e => {
	const top = e.clientY
	const left = e.clientX
	// pozycja w ktrórą klikamy

	const btnTopPosition = e.target.offsetTop
	const btnLeftPosition = e.target.offsetLeft
	// pozycja przycisku

	const insideBtnTop = top - btnTopPosition
	const insideBtnLeft = left - btnLeftPosition

	const circle = document.createElement('span')
	circle.classList.add('circle')

	e.target.appendChild(circle)

	circle.style.top = insideBtnTop + 'px'
	circle.style.left = insideBtnLeft + 'px'

	setTimeout(() => {
		circle.remove()
	}, 1000)
}

btn.addEventListener('click', btnAnimation)
