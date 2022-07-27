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

function wa() {
  navigator.clipboard.writeText(
    'https://je-digital.netlify.app/whatsapp/whats.html'
  )
}
function ig() {
  navigator.clipboard.writeText('https://www.instagram.com/je_digital.art/')
}
function ws() {
  navigator.clipboard.writeText('#')
}
function yt() {
  navigator.clipboard.writeText(
    'https://www.youtube.com/channel/UCnJPfmImmGS3-yZEOHI52Hg'
  )
}
function allert() {
  swal({
    title: 'Valeu!',
    text: 'Link de compartilhamento copiado! 😎🤙',
    icon: 'success'
  })
}
