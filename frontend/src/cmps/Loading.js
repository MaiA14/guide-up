import React from 'react'

import Navbar from '../cmps/Navbar.js'
import { Loader, Image, Segment } from 'semantic-ui-react'

const LoaderStyle = {
  borderBottom: 'none'
}

const styleNavBar = {
  backgroundColor: '#537580'
}

const LoaderExampleActive = () => {
  return (
    <div>

      <Loader size={'massive'} style={LoaderStyle} active />
    </div>

  )

}

export default LoaderExampleActive