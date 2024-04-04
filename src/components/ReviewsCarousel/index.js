import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftArrow = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onClickRightArrow = () => {
    const {index} = this.state
    const {reviewsList} = this.props

    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="show-container">
          <button
            type="button"
            data-testid="leftArrow"
            className="arrow-btn"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="content-container">
            <img src={imgUrl} alt={username} />
            <p className="user-Name">{username}</p>
            <p className="company-Name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            className="arrow-btn"
            data-testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
