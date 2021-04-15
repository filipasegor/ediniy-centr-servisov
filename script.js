
const dropDown = document.querySelectorAll('.dropDown');
const list = document.querySelector('.hidden-ul');
const button = document.getElementById('openListButton')
console.log(dropDown)

let state = "none"


button.addEventListener('click', function() {
  if (state == "none") {
    list.style.display = "block"
    state = "block"
  } else {
    list.style.display = "none"
    state = "none"
  }
})
