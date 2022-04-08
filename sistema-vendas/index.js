(function clock() {
  const date = new Date()

  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  let period = "AM"

  if (hours === 0) {
    hours = 12
  } else if (hours > 12) {
    hours = hours - 12
    period = 'PM'
  }

  hours = (hours < 10) ? '0' + hours : hours
  minutes = (minutes < 10) ? '0' + minutes : minutes
  seconds = (seconds < 10) ? '0' + seconds : seconds

  const time = hours + ':' + minutes + ':' + seconds + ' ' + period

  document.getElementById('current-clock').innerText = time
  let t = setTimeout(function () { clock() }, 1000)
})()

function generateReceipt() {
  const name = document.getElementById('clientName').value
  const email = document.getElementById('email').value
  const menuIndex = document.getElementById('menu')
  const menuOption = menuIndex.options[menuIndex.selectedIndex].innerHTML
  const clientAddress = document.getElementById('clientAddress').value
  const plus1 = document.getElementById('plus-1').checked && document.getElementById('plus-1').value
  const plus2 = document.getElementById('plus-2').checked && document.getElementById('plus-2').value
  const plus3 = document.getElementById('plus-3').checked && document.getElementById('plus-3').value
  const isTrip = document.getElementById('trip').checked

  if (!name) document.getElementById('clientName').classList.add('is-invalid')
  if (name) document.getElementById('clientName').classList.remove('is-invalid')

  if (!email) document.getElementById('email').classList.add('is-invalid')
  if (email) document.getElementById('email').classList.remove('is-invalid')

  if (!clientAddress) document.getElementById('clientAddress').classList.add('is-invalid')
  if (clientAddress) document.getElementById('clientAddress').classList.remove('is-invalid')

  if (!menuOption || menuOption === 'Selecione um prato...' ) document.getElementById('menu').classList.add('is-invalid')
  if (menuOption && menuOption !== 'Selecione um prato...' ) document.getElementById('menu').classList.remove('is-invalid')

  const receipt = `Dados do cliente:
  \tNome do cliente:\t${name ? name : 'Nenhum cliente informado'}
  \tE-mail do cliente:\t${email ? email : 'Nenhum email informado'}
  \tEndereço do cliente:\t${clientAddress ? clientAddress : 'Nenhum e-mail informado'}
  \nPedido:
  \t${menuOption && menuOption !== 'Selecione um prato...' ? menuOption : 'Nenhum pedido informado'}
  \t${!plus1 && !plus2 && !plus3 ? 'Nenhum adicional informado' : ''}
  ${plus1 ? `\tBacon - R$3,00` : ''}
  ${plus2 ? `\tCheddar - R$4,00` : ''}
  ${plus3 ?`\tMussarela - R$2,00` : ''}
  \nMeio de entrega:
  \t${isTrip ? 'Para viagem' : 'Refeição no local'}
  \nTotal: ${calc()}
  `
  if (name && email && clientAddress && menuOption && menuOption !== 'Selecione um prato...') {
    document.querySelector('#receipt').innerHTML = receipt
  }
}

function calc() {
  const menuOption = document.getElementById('menu').value
  const plus1 = document.getElementById('plus-1').checked && document.getElementById('plus-1').value
  const plus2 = document.getElementById('plus-2').checked && document.getElementById('plus-2').value
  const plus3 = document.getElementById('plus-3').checked && document.getElementById('plus-3').value

  let total = 0

  if (plus1) total += Number(plus1)
  if (plus2) total += Number(plus2)
  if (plus3) total += Number(plus3)
  if (menuOption) total += Number(menuOption)

  document.querySelector('#total-receipt').value = `R$${String(total).replace('.',',')}`
  return `R$${String(total).replace('.',',')}`
}

function textReset() {
  document.querySelector('#receipt').innerText = ''
}
