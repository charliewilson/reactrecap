import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

class PhotoFeed extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      data: []
    }
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/photos/${this.props.photoid}`, {
      method: 'get'
    }).then((response) => {
      return response.json();
    }).then(data => {
      this.setState({
        data: data,
        loaded: true
      })
    }).catch(err => console.log(err));
  }

  render() {
    if (!this.state.loaded) {
      return(
        <p>Loading...</p>
      )
    }

    const { data } = this.state
    const { history } = this.props
    return(
      <React.Fragment>
        <Link onClick={() => history.goBack()}>
          <Image src={this.state.data.url} rounded/>
        </Link>
        <p>{this.state.data.title}</p>
      </React.Fragment>
    )

  }

}

export default PhotoFeed