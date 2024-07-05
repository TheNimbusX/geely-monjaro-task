//функция смены цвета в карточке автомобиля
function changeImage(elem) {
  var imageUrl = elem.getAttribute("image");
  document.getElementById("car-img").setAttribute("src", imageUrl);
}
document.querySelector('[value="blue"]').click();

function changeImageSecond(elem) {
    var imageUrl = elem.getAttribute("image");
    document.getElementById("car-img2").setAttribute("src", imageUrl);
  }
  document.querySelector('[value="blue"]').click();

  function changeImageThird(elem) {
    var imageUrl = elem.getAttribute("image");
    document.getElementById("car-img3").setAttribute("src", imageUrl);
  }
  document.querySelector('[value="blue"]').click();

  function changeImageFourth(elem) {
    var imageUrl = elem.getAttribute("image");
    document.getElementById("car-img4").setAttribute("src", imageUrl);
  }
  document.querySelector('[value="blue"]').click();  
  
// функция для кнопки "показать еще"
const showMore = document.querySelectorAll(".show-more");

for (var i = 0; i < showMore.length; i++) {
  showMore[i].addEventListener("click", function () {
    var showPerClick = 3;
    var hidden = this.parentNode.querySelectorAll(".hidden");

    for (var i = 0; i < showPerClick; i++) {
      if (!hidden[i]) return (this.outerHTML = "");
      hidden[i].classList.add("card__wrapper");
      hidden[i].classList.remove("hidden");
    }
  });
}

//fancybox
Fancybox.bind('[data-fancybox]', {
  });    