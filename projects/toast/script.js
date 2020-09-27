const btn =document.querySelector('#btn')
const notiDiv =document.querySelector('#notiDiv')

btn.addEventListener('click', () => {
  const notiDiv = document.querySelector('#notiDiv')
  const notifi = document.createElement('p')
  notifi.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis earum sit.'
  notiDiv.appendChild(notifi)

  setTimeout(() => { notifi.remove()}, 2000)
})