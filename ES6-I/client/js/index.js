let campos = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')
];

document.querySelector('.form').addEventListener('submit', (e) => {

  e.preventDefault();

  let tbody = document.querySelector('table tbody')

  let tr = document.createElement('tr')

  campos.forEach((campo) => {

    let td = document.createElement('td')
    td.textContent = campo.value
    tr.appendChild(td)
  })

  let tdVolume = document.createElement('td')
  tdVolume.textContent = campos[1].value * campos[2].value

  tr.appendChild(tdVolume)

  tbody.appendChild(tr)

  //setando valores para um melhor UX
  campos[0].value = ''
  campos[1].value = 1
  campos[2].value = ''

  campos[0].focus()
})