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
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=30')
    .then((response) => {
      return response.json();
    })
    .then(data => {
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
    return(
      <Route
      render={({ match, history }) => (
        <React.Fragment>
          {data.map((photo, i) => (
            <Link
            style={{display:'inline-block',margin:10}}
            to={`${match.url}/${photo.id}`}>
            <Image
              src={photo.thumbnailUrl}
              key={i}
              rounded
            />
            </Link>
          ))}
          </React.Fragment>
      )}
    />
    )

  }

}

export default PhotoFeed