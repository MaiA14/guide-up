import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {

        return (
                <Carousel transitionTime ={700} emulateTouch={false} infiniteLoop={true} className="Carousel" showThumbs={false} itemSize={300} >
                    <Link to={`/location/?city=paris`}>
                        <div  >
                            <img height="700"  src="https://www.jetsetter.com/uploads/sites/7/2019/04/GettyImages-924894324-1380x690.jpg" />
                        </div>
                    </Link>
                    <Link to={`/location/?city=barceolna`}>

                        <div>
                            <img height="700" src="https://imgbbb.com/images/2020/01/16/barceolna.jpg" />
                        </div>
                    </Link>

                    <Link to={`/location/?city=new-york`}>
                        <div>
                            <img height="700"  src="https://images.unsplash.com/photo-1531558506007-fe311a2f4729?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80" />
                        </div>
                    </Link>

                    <Link to={`/location/?city=mexico`}>
                        <div>
                            <img height="700"  src="https://images.squarespace-cdn.com/content/v1/58b2f9802e69cf75a41179db/1516400521105-H1KNSLG0GVXB57LKOSM9/ke17ZwdGBToddI8pDm48kNhhLgcdU_WvGBc9Q-0GUP97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UajNmZTwxd_gB5chSfoFJT1FYkMK7zQtwLKZOfss0fQDr6Osy_dUxNTp_VXDOR5Z4g/image-asset.jpeg" />
                        </div>
                    </Link>

                    <Link to={`/location/?city=tel-aviv`}>
                        <div>
                            <img height="700"  src="https://www.leonardo-hotels.com/octopus/upload/images/pages/110904200-1-.jpg" />
                        </div>
                    </Link>
                    <Link to={`/location/?city=berlin`}>
                        <div>
                            <img height="700"  src="https://images.unsplash.com/photo-1559564484-e48b3e040ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                        </div>
                    </Link>



                </Carousel>
        );
    }
}

export default (DemoCarousel)
