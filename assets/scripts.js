;(function () {
  'use strict'
  const inputs = document.getElementsByTagName('input')
  inputs.addEventListener('onChange', changeInput)

  const changeInput = () => {
    console.log(this)
  }
})()
