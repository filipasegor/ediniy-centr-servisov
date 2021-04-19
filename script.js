
  const list = document.querySelector('.hidden-ul');
  const openButton = document.getElementById('openListButton');

  let state = "none";


  if(openButton){
    openButton.addEventListener('click', function() {
      if (state == "none") {
        list.style.display = "block"
        state = "block"
      } else {
        list.style.display = "none"
        state = "none"
      }
    });
  };

  const dropDownFirst = document.getElementById('dropdown-par-first');
  const dropDownSecond = document.getElementById('dropdown-par-second');
  const onClickFirst = document.getElementById('onClickFirst');
  const onClickSecond = document.getElementById('onClickSecond');


  if (onClickFirst) {
    onClickFirst.addEventListener('click', function(){
      if (state == "none") {
        dropDownFirst.style.display = "block"
        state = "block"
      } else {
        dropDownFirst.style.display = "none"
        state = "none"
      }
    })
  }

  if (onClickSecond) {
    onClickSecond.addEventListener('click', function(){
      if (state == "none") {
        dropDownSecond.style.display = "block"
        state = "block"
      } else {
        dropDownSecond.style.display = "none"
        state = "none"
      }
    })
  }
