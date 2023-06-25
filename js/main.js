const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });


 

  function init() {
    let map = new ymaps.Map('map', {
        center: [55.75554289958026,37.64131907421875],
        zoom: 9

    });
  }

  ymaps.ready(init);

  function init() {
    let map = new ymaps.Map1('map1', {
        center: [55.75554289958026,37.64131907421875],
        zoom: 9

    });
  }

  ymaps.ready(init);


  