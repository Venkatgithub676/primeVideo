// Write your code here
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import './index.css'

const MovieItem = props => {
  const {each} = props
  console.log(each)
  const {thumbnailUrl, videoUrl} = each
  return (
    <Popup
      trigger={
        <button className="imgs-btn" type="button">
          <img src={thumbnailUrl} alt="thumbnail" className="imgs" />
        </button>
      }
      modal
      overlayStyle={{backgroundColor: 'transparent'}}
    >
      {close => (
        <div className="video-con">
          <button
            type="button"
            className="close-btn"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose className="close-btn-icon" alt="close-btn" />
          </button>
          <ReactPlayer
            url={videoUrl}
            className="react-player"
            width={500}
            height={250}
          />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
