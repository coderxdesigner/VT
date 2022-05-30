function gatherData(e) {
  e.preventDefault()
  const amt = document.getElementsByName('amount')
  const frq = document.getElementsByName('frequency')
  const custom = document.getElementById('customAmount')
  let selectAmt
  let frequency
  for (const amtBtn of amt) {
    if (amtBtn.checked) {
      selectAmt = amtBtn.value
    }
  }
  for (const frqBtn of frq) {
    if (frqBtn.checked) {
      frequency = frqBtn.value
    }
  }
  if (custom.value != '' || custom.value != 0) {
    let err = document.getElementById('error')
    err.classList.remove('active')
    selectAmt = 'custom value'
    if (custom.value > 10000) {
      err.classList.add('active')
    }
  } else {
    custom.value = 0
  }
  console.log(`?amount=${selectAmt}&customGift=${custom.value}&frequency=${frequency}`)
}
const btn = document.getElementById('give')
btn.addEventListener('click', gatherData)
