import React, { Component } from "react";
import { connect } from "react-redux";

import SocketService from "../service/SocketService.js";

class Chatbox extends Component {
  state = {
    visible: false,
    txt: "",
    comments: { resiveMsg: [], outPutMsg: [] },
  };

  componentDidMount() {
    SocketService.setup();
    SocketService.emit("chat topic", this.props.loggedInUser._id);
    SocketService.on("chat addMsg", (newComment) => {
      this.setState((prevState) => ({
        comments: { ...prevState.comments, ["resiveMsg"]: newComment },
      }));
    });
  }
  handleSendMassage = () => {
    this.setState({ txt: "" });

    SocketService.emit("chat newMsg", this.state.txt);
  };
  handleChange = (ev) => {
    const value = ev.target.value;
    this.setState({ txt: value });
  };

  render() {
    console.log(this.state.txt);
    return (
      <div className="chat-messages-chatbox">
        <div className="chat-details">
          <img
            src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1580585567/liivrwjfvseuovfquyxp.png"
            className="chat-user-img"
          ></img>
          <div className="chat-guide-name">Lihi Cohen</div>
        </div>
        <div className="chat-window">
          {this.state.comments.resiveMsg.map((comment) => {
            return <div className="bubble-message">{comment}</div>;
          })}
        </div>
        <div className="message-container">
          <input
            value={this.state.txt}
            onChange={this.handleChange}
            type="text"
            className="message-input"
            placeholder="Type a message..."
          ></input>
          <button onClick={this.handleSendMassage} className="send-btn">
            Send
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    guides: state.guides,
    loggedInUser: state.guides.loggedInUser,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Chatbox);
