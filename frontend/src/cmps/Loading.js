import React from 'react'
import { Loader, Image, Segment } from 'semantic-ui-react'

const LoaderStyle = {
  borderBottom: 'none'
}


const LoaderExampleActive = () => (
  <Loader size={'massive'} style={LoaderStyle} active />

)

export default LoaderExampleActive