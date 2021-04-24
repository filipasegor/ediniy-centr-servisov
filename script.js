window.addEventListener('load', function() {

  ymaps.ready(init);
       function init(){
           var myMap = new ymaps.Map("map", {
               center: [55.727268, 37.627696],
               zoom: 18
           });

			// Создание метки
			var myPlacemark = new ymaps.Placemark(
			// Координаты метки
			[55.727268, 37.627696]
			);

		// Добавление метки на карту
		myMap.geoObjects.add(myPlacemark);
       }


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


const backgroundGradient = document.getElementsByClassName('background-gradient');

  for(let i = 0; i < backgroundGradient.length; i++){
    backgroundGradient[i].addEventListener('mousemove', e => {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      console.log(backgroundGradient);
      backgroundGradient[i].style.setProperty('--x', x + 'px');
      backgroundGradient[i].style.setProperty('--y', y + 'px');
    });
  }

// const arrow = document.getElementsByClassName('arrow');
//
// if (backgroundGradient && arrow) {
//   backgroundGradient.addEventListener('mousemove', e => {
//     arrow.toggle.classList('active');
//   });
// }
  const stats = document.getElementById('stats');
  stats.addEventListener('mousemove', e => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    console.log(backgroundGradient);
    stats.style.setProperty('--x', x + 'px');
    stats.style.setProperty('--y', y + 'px');
  })

})
