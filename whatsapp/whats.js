const btnEl = document.querySelector('.btn')

const toggleOptions = () => {
  const wrapperEl = document.querySelector('.wrapper')
  const iconEl = btnEl.querySelector('i')

  wrapperEl.classList.toggle('active')

  if (iconEl.classList.contains('ri-share-line')) {
    iconEl.classList.replace('ri-share-line', 'ri-close-line')
  } else {
    iconEl.classList.replace('ri-close-line', 'ri-share-line')
  }
}

btnEl.addEventListener('click', toggleOptions)

function a() {
  navigator.clipboard.writeText(
    'https://api.whatsapp.com/send/?phone=5588988351049&text&app_absent=0'
  )
}
function j() {
  navigator.clipboard.writeText(
    'https://api.whatsapp.com/send/?phone=5588992117779&text&app_absent=0'
  )
}

function allert() {
  swal({
    title: 'Valeu!',
    text: 'Link de compartilhamento copiado! 😎🤙',
    icon: 'success'
  })
}
