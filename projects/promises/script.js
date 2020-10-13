const piada = document.querySelector('#piada')
const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
};
  
fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
        piada.innerHTML = data.joke
    })

const cepType = document.querySelector('#cepType')
const cepShow = document.querySelector('#cepShow')
const cepBtn = document.querySelector('#cepBtn')

cepBtn.addEventListener('click', async() => {
    const cepTratado = cepType.value.split('').filter(e => e !== '-' && e !== '.' ).join('')
    fetch(`https://viacep.com.br/ws/${cepType.value}/json/`)
        .then((response) => response.json())
        // .then(data => console.log(data))
        .then(data => {cepShow.innerHTML= `Rua ${data.logradouro} no bairro ${data.bairro} em ${data.localidade}.`})

})