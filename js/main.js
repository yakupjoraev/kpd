// Мобильное меню бургер
function burgerMenu() {
  const container = document.querySelector('.header');

  if (!container) {
    return null
  }
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.header-sections-nav-buttom')
  // const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      // body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      // body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      // body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      // body.classList.remove('locked')
    }
  })
}
burgerMenu();

function search() {

  const search = document.querySelector('[data-search]')

  if (!search) {
    return null
  }
  const searchProducts = document.querySelector('[data-search-products]')
  const searchExit = document.querySelector('[data-search-products-exit]')

  search.addEventListener('click', () => {
    searchProducts.classList.toggle('active')
  })

  searchExit.addEventListener('click', () => {
    searchProducts.classList.remove('active')
  })

  console.log();
}

search();

function mainSlider() {
  const container = document.querySelector('.slider')
  if (!container) {
    return null
  }
  const swiper = new Swiper(".main-slider", {
    slidesPerView: '1',
    pagination: {
      el: ".swiper-pagination",
    },
  });

}

mainSlider();

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

tabsContainer();

function mobileFilter() {
  const container = document.querySelector('[data-filters]');

  if (!container) {
    return null
  }

  const closeBtn = document.querySelector('[data-close-filters]');
  const openBtn = document.querySelector('[data-filter-mobile]');

  openBtn.addEventListener('click', () => {
    container.classList.add('active')
  })

  closeBtn.addEventListener('click', () => {
    container.classList.remove('active')
  })


  let filterHeaders = document.querySelectorAll('.filters__header');

  filterHeaders.forEach(header => {
    header.addEventListener('click', () => {
      let parentElement = header.parentNode;
      parentElement.classList.toggle('active');
    });
  });

  let sortingBtns = document.querySelectorAll('.sorting__btn');

  sortingBtns.forEach((sortingBtn, index) => {
    sortingBtn.addEventListener('click', () => {
      sortingBtns.forEach(btn => btn.classList.remove('active'));
      sortingBtn.classList.add('active');

      if (index === 1) {
        document.querySelector('.products-list').classList.add('list');
      } else {
        document.querySelector('.products-list').classList.remove('list');
      }
    });
  });


}

mobileFilter();

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
productPreviewSlider();

function productsSlider() {
  const container = document.querySelector('.product-slider');

  if (!container) {
    return null
  }

  var swiper = new Swiper(".product-slider__slider", {
    navigation: {
      nextEl: ".product-card__arrow-next",
      prevEl: ".product-card__arrow-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 6,
        spaceBetween: 20
      }
    },
  });

}

productsSlider();


const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});


const getTemplate = (data = [], placeholder, selectedId) => {
  let text = placeholder ?? 'placeholder не указан'

  const items = data.map(item => {
    let cls = ''
    if (item.id === selectedId) {
      text = item.value
      cls = 'selected'
    }
    return `
          <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
      `
  })
  return `
      <input type="hidden" class="hidden__input">
      <div class="select__backdrop" data-type="backdrop"></div>
      <div class="select__input" data-type="input">
          <span data-type="value">${text}</span>
          <img src="./img/filters-arrow.svg" alt="arrow" data-type="arrow" class="select__arrow">
      </div>
      <div class="select__dropdown">
          <ul class="select__list">
              ${items.join('')}
          </ul>
      </div>
  `
}
class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.options = options
    this.selectedId = options.selectedId

    if (!this.$el) {
      console.error(`Элемент с селектором ${selector} не найден.`)
      return
    }

    this.render()
    this.setup()
  }

  render() {
    const { placeholder, data } = this.options
    this.$el.classList.add('select')
    this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId)
  }
  setup() {
    this.clickHandler = this.clickHandler.bind(this)
    this.$el.addEventListener('click', this.clickHandler)
    this.$arrow = this.$el.querySelector('[data-type="arrow"]')
    this.$value = this.$el.querySelector('[data-type="value"]')
  }

  clickHandler(event) {
    const { type } = event.target.dataset
    if (type === 'input') {
      this.toggle()
    } else if (type === 'item') {
      const id = event.target.dataset.id
      this.select(id)
    } else if (type === 'backdrop') {
      this.close()
    }
  }

  get isOpen() {
    return this.$el.classList.contains('open')
  }

  get current() {
    return this.options.data.find(item => item.id === this.selectedId)
  }

  select(id) {
    this.selectedId = id
    this.$value.textContent = this.current.value

    this.$el.querySelectorAll(`[data-type="item"]`).forEach(el => el.classList.remove('selected'))
    this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected')

    this.options.onSelect ? this.options.onSelect(this.current) : null
    this.close()
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() {
    this.$el.classList.add('open')
    this.$arrow.classList.add('open')
  }

  close() {
    this.$el.classList.remove('open')
    this.$arrow.classList.remove('open')
  }

  destroy() {
    this.$el.removeEventListener('click', this.clickHandler)
    this.$el.innerHTML = ''
  }
}


// Инициализация плагина
const select = new Select('#select', {
  placeholder: 'По умолчанию',
  selectedId: '1',
  data: [
    { id: '1', value: 'По умолчанию' },
    { id: '2', value: 'По умолчанию' },
    { id: '3', value: 'По умолчанию' },
    { id: '4', value: 'По умолчанию' },
    { id: '5', value: 'По умолчанию' },
  ],
  onSelect(item) {
    const input = document.querySelector('.hidden__input')
    input.value = item.value
  }
})



function range() {
  const rangeContainers = document.querySelectorAll(".filters__ranges");

  rangeContainers.forEach((container) => {
    const rangeInput = container.querySelectorAll(".range-input input"),
      priceInput = container.querySelectorAll(".price-input input"),
      range = container.querySelector(".slider .progress");
    let priceGap = 1000;

    priceInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
          if (e.target.className === "input-min") {
            rangeInput[0].value = minPrice;
            range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
          } else {
            rangeInput[1].value = maxPrice;
            range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
          }
        }
      });
    });

    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
          if (e.target.className === "range-min") {
            rangeInput[0].value = maxVal - priceGap;
          } else {
            rangeInput[1].value = minVal + priceGap;
          }
        } else {
          priceInput[0].value = minVal;
          priceInput[1].value = maxVal;
          range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
          range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
      });
    });
  });
}

range();








function init() {
  let center = [56.868918274719825, 38.244967662040686];

  let map = new ymaps.Map('map', {
    center: center,
    zoom: 9
  });

  let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/location-icon.svg',
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

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});