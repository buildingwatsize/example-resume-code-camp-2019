function imageEnlarge(elem) {
  let divs = elem.querySelectorAll('div')
  divs.forEach((div) => {
    div.classList.add("fontEnlarge")
  })
  let img = elem.querySelector('img')
  img.classList.remove("inlineLogo")
  img.classList.add("inlineLogoEnlarge")
  let trash = elem.querySelector('i.fa-trash')
  trash.style.display = 'unset';
}

function imageReset(elem) {
  let divs = elem.querySelectorAll('div')
  divs.forEach((div) => {
    div.classList.remove("fontEnlarge")
  })
  let img = elem.querySelector('img')
  img.classList.remove("inlineLogoEnlarge")
  img.classList.add("inlineLogo")
  let trash = elem.querySelector('i.fa-trash')
  trash.style.display = 'none';
}

function promptEditField(mode = "name") {
  let name = prompt(mode === "name" ? "กรุณาใส่ชื่อ-นามสกุล" : "กรุณาใส่ชื่อเล่น")
  document.getElementById(mode === "name" ? "myName" : "myNickname").innerText = name
}

function addSkill() {
  let name = prompt("กรุณากรอกชื่อความสามารถ")
  if (!name) {
    alert("กรุณากรอกชื่อความสามารถ!")
    return;
  }

  let level = prompt("กรุณากรอกระดับคะแนน")
  if (!level || isNaN(level) || level < 0.0 || level > 5.0) {
    alert("กรุณากรอกระดับคะแนน ที่มีค่าตั้งแต่ 0-5 (สามารถใส่ค่า 0.5 ได้)!")
    return;
  }

  let children = $("#skillTable").children()
  let childrenLength = children.length

  let stars = []

  for (let index = 0; index < Math.floor(level); index++) {
    stars.push(`<i class="fas fa-star"></i>`)
  }
  
  let isHalf = level % 1 === 0.5
  if (isHalf) {
    stars.push(`<i class="fas fa-star-half-alt"></i>`)
  }

  let remainStars = (5 - stars.length)
  for (let index = 0; index < remainStars; index++) {
    stars.push(`<i class="far fa-star"></i>`)
  }

  let mockElem = `<div class="table-row justifyCenter" onmouseover="imageEnlarge(this)"
    onmouseout="imageReset(this)">
    <div class="serial">` + (childrenLength - 1) + `</div>
    <div class="skill"> <img src="img/logo-programming/devicon.svg" class="inlineLogo"
    alt="` + name + `">` + name + `<i class="fas fa-trash clickable pl-2" style="display: none; color: red;" onclick="removeSkill(this)"></i></div>
    <div class="rating">` + stars.join(" ")
    + `</div>
  </div>`

  $("#skillTable > div:nth-child(" + (childrenLength - 1) + ")").after(mockElem);
}

function removeSkill(elem) {
  elem.parentNode.parentNode.parentNode.removeChild(elem.parentNode.parentNode)
  
  let children = $("#skillTable").children()
  let childrenLength = children.length
  for (let index = 0; index < childrenLength; index++) {
    if (index !== 0 && index !== childrenLength - 1) {
      const element = children[index].querySelector('div.serial')
      element.innerText = ('0' + index).slice(-2) 
    }
  }
}