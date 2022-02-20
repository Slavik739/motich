const redBtn = document.querySelector('.red')
const orangeBtn = document.querySelector('.orange')
const yellowBtn = document.querySelector('.yellow')
const greenBtn = document.querySelector('.green')
const blueBtn = document.querySelector('.blue')
const purpleBtn = document.querySelector('.purple')
const imgShow = document.querySelector('.picture')
const infoBeBtn = document.querySelector('.infoBeBtn')
const butonBlock = document.querySelector('.buton')


// При нажатии на красную кнопку - сделать красный цвет фона body
redBtn.addEventListener('click', () => {
	document.body.style.background = 'red'
})

// При нажатии на оранжевую кнопку - изменить цвет текста соседних кнопок на оранжевый
function changeColor() {
	redBtn.style.color = 'orange'
	yellowBtn.style.color = 'orange'
}
orangeBtn.addEventListener('click', changeColor)

// При нажатии на желтую кнопку - поменяйте текст в последней кнопке на другой
yellowBtn.addEventListener('click', () => {
	purpleBtn.innerText = 'Другой'
})

// При нажатии на зеленую кнопку - попробуйте вывести скрытый элемент картинки с травой
greenBtn.addEventListener('click', () => {
	imgShow.classList.toggle('hide')
})

// При нажатии на голубую кнопку - попробуйте создать копию кнопки рядом со событием копирование
function buttons() {
	butonBlock.insertAdjacentHTML('beforebegin', `<button class="blue-light">Голубая</button>`)
	const blueLightBtn = document.querySelectorAll('.blue-light')
	blueLightBtn.forEach(el => el.addEventListener('click', () => {
		this.buttons()
	}))
}
buttons()

// При нажатии на синюю кнопку - скройте первую кнопку
blueBtn.addEventListener('click', () => {
	redBtn.style.visibility = 'hidden'
})

// При нажатии на фиолетовую нопку - отобразите первую кнопку, если она есть выведите надпись: "Кнопка есть"
purpleBtn.addEventListener('click', () => {

	window.getComputedStyle(redBtn).visibility == 'visible' ? infoBeBtn.classList.remove('hide') : redBtn.style.visibility = 'visible'
})