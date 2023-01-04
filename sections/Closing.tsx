import Image from 'next/image'
import Section from '../components/Section'
import gcBikeMtns from '../public/img/gc-bike-mtns.png'
import chapelGlen from '../public/img/chapel-glen.jpg'
import dadBike from '../public/img/dad-bike.jpeg'
import daisySnow from '../public/img/daisy-snow.jpeg'
import dadMeHeadshot from '../public/img/dad-me-headshot.jpeg'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

const swiperImages = [
  gcBikeMtns,
  chapelGlen,
  dadBike,
  daisySnow,
  dadMeHeadshot,
]

const Closing = () => (
  <Section header='Closing' hasSpacer={false}>
    <>
      <Swiper
        spaceBetween={25}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        modules={[Navigation, Scrollbar, Pagination, A11y, Autoplay]}
        pagination={{ clickable: true }}
        navigation
        scrollbar={{ draggable: true }}
      >
        {swiperImages.map((image, i) =>
          <SwiperSlide key={i}>
            <Image
              src={image}
              className='select-none'
              alt=''
            />
          </SwiperSlide>
        )}
      </Swiper>
      <p className='mt-4 mb-8'>
        I hope you enjoyed your visit and a learned a bit about what makes me tick.
        Thanks for stopping by!
      </p>
    </>
  </Section>
)

export default Closing