import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    slidesToScroll: 1,
    slidesToShow: 1,
    dotsClass: 'slick-dots',
  }

  return (
    <div className="slider-container" data-testid="planets">
      <div className="bg-cont">
        <h1 className="heading">PLANETS</h1>
      </div>
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} eachPlanetItem={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
