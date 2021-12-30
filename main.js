document.getElementById('closebtn').addEventListener('click', () => {
  const nav = document.getElementById('navbar')
  nav.style.width = '0px'
  const home = document.getElementById('home')
  home.style.display = 'none'
})
document.getElementById('openbtn').addEventListener('click', () => {
  const nav = document.getElementById('navbar')
  nav.style.width = '100%'
  const home = document.getElementById('home')
  home.style.display = 'block'
})

const ssec = document.getElementById('ssec')
const tsec = document.getElementById('tsec')
const fosec = document.getElementById('fosec')

window.addEventListener('scroll', () => {
  let off = window.pageYOffset;
  ssec.style.backgroundPositionY = off * 0.7 + 'px'
  tsec.style.backgroundPositionY = off * 0.7 + 'px'
  fosec.style.backgroundPositionY = off * 0.9 + 'px'
})

const ShowMsg = () => {
  Swal.fire({
    title: "A I N ' T <br> J O I N E D <br>  Y E T",
    background: "black",
    confirmButtonColor: '#111111',
    backdrop: 'rgba(0,0,0,0.6)'
  })
}