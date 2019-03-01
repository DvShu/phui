import PhCarousel from './PhCarousel'
import PhCarouselItem from './PhCarouselItem'

let Carousel = Object.create(null)

Carousel.install = function (Vue) {
  Vue.component('ph-carousel', PhCarousel)
  Vue.component('ph-carousel-item', PhCarouselItem)
}

export default Carousel
