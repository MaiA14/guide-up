import { Comment, Icon } from 'semantic-ui-react'
import axios from 'axios';
import React, { Component } from 'react'

class CommentView extends Component {

  state = {
    userImg: 'https://he.gravatar.com/userimage/131942614/161c0e6bc0868e9a0253707495c1c546.jpeg'
  }

  render() {
    return (
      <Comment.Group >
        <Comment>
          <Comment.Avatar as='a' src={this.state.userImg} />
          <Comment.Content>
            <Comment.Author>{this.props.review.createBy.userName}
            </Comment.Author>
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