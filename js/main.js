const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
});

function tabsContainer() {
  const container = document.querySelector('.tabs')
  if (!container) {
    return null
  }

  function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') {
    const header = document.querySelector(headerSelector),
      tab = document.querySelectorAll(tabSelector),
      content = document.querySelectorAll(contentSelector)
    function hideTabContent() {
      content.forEach(item => {
        item.style.display = 'none'
      });
      tab.forEach(item => {
        item.classList.remove(activeClass)
      });
    }
    function showTabContent(i = 0) {
      content[i].style.display = display
      tab[i].classList.add(activeClass)
    }
    hideTabContent()
    showTabContent()
    header.addEventListener('click', e => {
      const target = e.target
      if (target.classList.contains(tabSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
        tab.forEach((item, i) => {
          if (target == item || target.parentNode == item) {
            hideTabContent()
            showTabContent(i)
          }
        });
      }
    })
  }

  // ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
  // ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
  // ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
  // ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
  tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'active')

}

tabsContainer()

function productPreviewSlider() {
  const container = document.querySelector('.cardproduct-section-block-slider');

  if (!container) {
    return null
  }
  // Получаем список всех элементов swiper-slider-dot
  const selectItems = document.querySelectorAll('.swiper-slider-dot');

  // Получаем swiper
  const swiper = new Swiper('.cardproduct-section-block-slider', {
    slidesPerView: 1,
  });
  function removeActive() {
    selectItems.forEach(selectItem => {
      selectItem.classList.remove('active')
    });

  }


  // Добавляем обработчик события клика на каждый элемент swiper-slider-dot
  selectItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Активируем соответствующий слайд в swiper
      swiper.slideTo(index);
      removeActive()
      item.classList.add('active')
    });
  });
}
productPreviewSlider()

function init() {
  let center = [56.868918274719825, 38.244967662040686];

  let map = new ymaps.Map('map', {
    center: center,
    zoom: 9
  });

  let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/location-icon.svg',
    iconImageSize: [42, 42],
    iconImageOffset: [-21, -41]
  })

  map.geoObjects.add(placemark);

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);
