function imageEnlarge(elem) {
  let divs = elem.querySelectorAll('div')
  divs.forEach((div) => {
    div.classList.add("fontEnlarge")
  })
  let img = elem.querySelector('img')
  img.classList.remove("inlineLogo")
  img.classList.add("inlineLogoEnlarge")
}
function imageReset(elem) {
  let divs = elem.querySelectorAll('div')
  divs.forEach((div) => {
    div.classList.remove("fontEnlarge")
  })
  let img = elem.querySelector('img')
  img.classList.remove("inlineLogoEnlarge")
  img.classList.add("inlineLogo")
}