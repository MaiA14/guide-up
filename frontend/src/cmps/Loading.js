import React from 'react'
import { Loader } from 'semantic-ui-react'

const style = {
    borderBottom: 'none',
    marginTop: '229px'
    
}

const loading = () => <Loader style={style} active inline='centered'  />

export default loading