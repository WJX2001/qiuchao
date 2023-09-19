const overlay = document.getElementById('overlay')
const popup = document.getElementById('popup')
const closeButton = document.getElementById('closeButton')

function openPopup() {
  overlay.style.display = 'block'
  popup.style.display = 'block'
}

function closePopup() {
  overlay.style.display = 'none'
  popup.style.display = 'none'
}

overlay.addEventListener('click', closePopup)
closeButton.addEventListener('click', closePopup)

openPopup()
