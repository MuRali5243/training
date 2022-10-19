import {Component} from 'react'
import './index.css'

class ReviewComp extends Component {
  state = {value: 0}

  onclickR = () => {
    const {reviewsList} = this.props
    const {value} = this.state

    const l = reviewsList.length
    console.log(value)
    console.log(l)
    if (value < l - 1) {
      this.setState({value: value + 1})
    } else {
      this.setState({value})
    }
  }

  onclickL = () => {
    const {reviewsList} = this.props
    const {value} = this.state

    const l = reviewsList.length
    console.log(value)
    console.log(l)
    if (value > 0) {
      this.setState({value: value - 1})
    }
  }

  render() {
    const {value} = this.state
    const {reviewsList} = this.props
    const presentComp = reviewsList[value]
    const {imgUrl, username, description, companyName} = presentComp
    return (
      <div className="main-cont">
        <h1>Reviews</h1>
        <div className="body-cont">
          <img src={imgUrl} alt={username} />
          <div className="btn-head">
            <button onClick={this.onclickL} testid="leftArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
                alt="left arrow"
              />
            </button>
            <p>{username}</p>
            <button testid="rightArrow" onClick={this.onclickR}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                alt="right arrow"
              />
            </button>
          </div>
          <p>{companyName}</p>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewComp
