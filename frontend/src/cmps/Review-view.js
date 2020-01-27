import { Comment, Icon } from 'semantic-ui-react'
import axios from 'axios';
import React, { Component } from 'react'






class CommentView extends Component {

  state = {
    userImg: ''
  }

  componentDidMount(){
    this.userImag()
  }



  userImag = async () => {
    const image = await axios.get('https://randomuser.me/api/')
    const userImg =image.data.results[0].picture.medium
    this.setState({ userImg })
  }



  render() {

    if (this.state.userImag === Object) return

    return (
      <Comment.Group >
        <Comment>
          <Comment.Avatar as='a' src={this.state.userImg} />
          <Comment.Content>
            <Comment.Author>{this.props.review.createBy.userName}</Comment.Author>
            <Comment.Metadata>
              <div>2 days ago</div>
              <div>
                <Icon color={'yellow'} name='star' />{this.props.review.rank}
              </div>
            </Comment.Metadata>
            <Comment.Text>
              {this.props.review.txt}
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group >
    )
  }




}

export default CommentView