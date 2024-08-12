// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionImgs = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyImgs = moviesList.filter(each => each.categoryId === 'COMEDY')
  return (
    <div className="bg-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video"
      />
      <div className="action-con">
        <h1 className="action-heading">Action Movies</h1>
        <MoviesSlider imgs={actionImgs} />
      </div>
      <div className="action-con">
        <h1 className="action-heading">Comedy Movies</h1>
        <MoviesSlider imgs={comedyImgs} />
      </div>
    </div>
  )
}

export default PrimeVideo
