// import React, { Component } from 'react'
// import quoryString from 'query-string'
// import { connect } from 'react-redux'
// import { Rating } from 'semantic-ui-react'


// import Calendar from '../cmps/Calendar.js'
// import { getGuide } from '../reducers/guide/actionGuide.js'
// import Review from '../cmps/Review.js'
// import Navbar from '../cmps/Navbar.js'


// class GuideDetails extends Component {
//     state = {
//         bookClassName: 'absolute'
//     }

//     componentWillMount() {
//         window.onscroll = () => {
//             let bookClassName
//             if (document.documentElement.scrollTop === 0) {

//                 bookClassName = 'absolute'
//                 this.setState({ bookClassName })
//             } else {
//                 bookClassName = 'fixed'
//                 this.setState({ bookClassName })

//             }

//         }


//         const items = quoryString.parse(this.props.location.search)
//         this.props.getGuide(items.guide_id);


//     }
//     backToListOfGuids = () => {

//         this.props.history.goBack()

//     }

//     onNewReview = (ev) => {

//         this.props.saveGuide(this.state)
//     }
//     render() {
//         const styleNavBar = {
//             backgroundColor: '#161f24'
//         }
//         return (

//             <div >
//                 <Navbar styleNavBar={styleNavBar} ></Navbar>
//                 {this.props.guide &&
//                     <div className="guide-details relative  ">
//                         <div className="flex row ">
//                             <div>
//                                 <button onClick={this.backToListOfGuids} className="back-btn space">Back</button>
//                                 <h1 className="guide-header ">{this.props.guide.name}</h1>
//                                 <img src={this.props.guide.imgUrl} className="guide-img-details space" ></img>
//                                 <h2 className="guide-desc space">{this.props.guide.shortDescription}</h2>
//                                 <span> From: {this.props.guide.city}</span>
//                                 <span>Langugages: {this.props.guide.langugages}</span>
//                             </div>
//                             <div >

//                                 <Calendar></Calendar>
//                             </div>
//                         </div>

//                         <div className="contanier-Details">
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                                  Vestibulum vitae pulvinar felis,
//                                   in sagittis libero. Donec at libero pulvinar,
//                                    condimentum ex in, commodo quam. Nam et mollis nisl.
//                                     Phasellus fringilla libero tortor,
//                                     semper ultrices purus suscipit vel.
//                                     Pellentesque in metus quis metus egestas blandit
//                                      a sit amet purus. Vestibulum ante ipsum primis in
//                                      faucibus orci luctus et ultrices posuere cubilia Curae;
//                                      Maecenas rhoncus turpis porta rutrum pharetra. Fusce consectetur
//                                       malesuada volutpat. Cras volutpat nunc libero, sed fermentum
//                                       urna egestas congue. In vitae sapien mattis, vehicula lectus non,
//                                            eleifend quam. Aliquam vitae enim eget felis faucibus dictum.</p>



//                         </div>




//                         <div className="space">
//                             <Review guide={this.onNewReview} ></Review>
//                         </div>
//                         <div className="guide-reviews-title space">
//                             {this.props.guide.reviews && this.props.guide.reviews.map(review => {
//                                 return (
//                                     <div className="review-contaner" key={review.id}>
//                                         <h1>{review.title}</h1>
//                                         <h2> {review.txt}</h2>
//                                         <Rating disabled maxRating={5} defaultRating={review.rank} icon='star' size='massive' />

//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 }
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         guide: state.guide
//     }
// }
// const mapDispatchToProps = {
//     getGuide,

// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(GuideDetails)

