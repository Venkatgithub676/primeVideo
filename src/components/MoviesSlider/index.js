// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {imgs} = props
  const settings = {
    slidesToScroll: 4,
    slidesToShow: 4,
    dots: true,
  }

  return (
    <Slider {...settings}>
      {imgs.map(each => (
        <MovieItem each={each} key={each.id} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
