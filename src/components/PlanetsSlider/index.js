import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
  }

  return (
    <div className="app-container">
      <h1 className="planets-heading">PLANETS</h1>
      <div className="slider-container" data-testid="planets">
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem key={each.id} details={each} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
