import React from "react"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Ucard } from "./Ucard"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i class='fa fa-chevron-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i class='fa fa-chevron-left'></i>
      </button>
    </div>
  )
}
export const Upcomming = ({ items, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div>
      <section className='upcome'>
        <div className='container'>
          <div className='heading flexSB'>
            <h1>{title}</h1>
            <Link to='/'>View All</Link>
          </div>
          <div className='content'>
            <Slider {...settings}>
              {items.map((item) => {
                return (
                  <div>
                    <Ucard key={item.id} item={item} />
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  )
}

// export default Upcomming