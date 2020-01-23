import React from 'react'

import Navbar from '../cmps/Navbar.js'
import { Loader, Image, Segment } from 'semantic-ui-react'

const LoaderStyle = {
  borderBottom: 'none'
}

const styleNavBar = {
  backgroundColor: '#161f24'
}

const LoaderExampleActive = () => {
  return (
    <div>
      <Navbar styleNavBar={styleNavBar} ></Navbar>
      <Loader size={'massive'} style={LoaderStyle} active />
    </div>

  )

}

export default LoaderExampleActive