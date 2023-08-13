// Write your code here

import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: true}

  changeBtn = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="welcome-bg-con">
        <div>
          <h1 className="welcome-heading">Welcome</h1>
          <p className="welcome-description">Thank you! Happy Learning</p>

          {isSubscribed ? (
            <button type="button" onClick={this.changeBtn}>
              Subscribe
            </button>
          ) : (
            <button type="button" onClick={this.changeBtn}>
              Subscribed
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Welcome
