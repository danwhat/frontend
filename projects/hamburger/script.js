/* Menu 1 */

const btn1 = document.querySelector(".btn1")
btn1.addEventListener('mouseover', onoff)

const menu1 = document.querySelector(".menu1")
menu1.addEventListener('mouseleave', onoff)

const onoff = () => {
  const menu1 = document.querySelector(".menu1")
  menu1.classList.toggle('able')
  btn1.classList.toggle('able')
}

/* Menu 2 */

const btn2 = document.querySelector(".btn2")
btn2.addEventListener('mouseover', () => {
  const menu2 = document.querySelector(".menu2")
  menu2.style.display = "flex"
})

const menu2 = document.querySelector(".menu2")
menu2.addEventListener('mouseleave', () => {
  const menu2 = document.querySelector(".menu2")
  menu2.style.display = "none"
})