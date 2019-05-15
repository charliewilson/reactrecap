import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PhotoSingle from './PhotoSingle'

const PhotoPage = ({ history, match }) => (
  <div
  style={{padding:10}}
  className="App">
    <PhotoSingle history={history} photoid={match.params.photoid} />
  </div>
)

export default PhotoPage