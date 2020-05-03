import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        
        return (
                <Carousel transitionTime ={700} 
                 infiniteLoop={true} className="Carousel" 
                 showThumbs={false} itemSize={300} >
                    <Link to={`/location/?city=paris`}>
                        <div  >
                            <img height="700"  
                            src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1588530308/r1edsdbqjdbyk0wduyqu.jpg" />
                        </div>
                    </Link>
                    <Link to={`/location/?city=barceolna`}>

                        <div>
                            <img height="700" 
                            src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1588542002/pi4mngy6jox4lgczckwa.jpg" />
                        </div>
                    </Link>

                    <Link to={`/location/?city=new-york`}>
                        <div>
                            <img height="700"  
                            src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1588530392/xskzqmpyw5hcj7tiljon.jpg" />
                        </div>
                    </Link>

                    <Link to={`/location/?city=mexico`}>
                        <div>
                            <img height="700"  
                            src="https://images.squarespace-cdn.com/content/v1/58b2f9802e69cf75a41179db/1516400521105-H1KNSLG0GVXB57LKOSM9/ke17ZwdGBToddI8pDm48kNhhLgcdU_WvGBc9Q-0GUP97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UajNmZTwxd_gB5chSfoFJT1FYkMK7zQtwLKZOfss0fQDr6Osy_dUxNTp_VXDOR5Z4g/image-asset.jpeg" />
                        </div>
                    </Link>

                    <Link to={`/location/?city=tel-aviv`}>
                        <div>
                            <img height="700"  
                            src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1588530446/ljkm1k2c2fktb0w9vup9.jpg" />
                        </div>
                    </Link>
                    <Link to={`/location/?city=berlin`}>
                        <div>
                            <img height="700"  
                            src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1588530473/sqyt74caur2dyoogogsf.jpg" />
                        </div>
                    </Link>
                </Carousel>
        );
    }
}

export default (DemoCarousel)