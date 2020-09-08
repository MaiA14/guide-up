import React, { Component } from "react";

export default class Experience extends Component {
  uploadImg = (ev) => {
    const CLOUD_NAME = "dtwqtpteb";
    const PRESET_NAME = "wcfdd5hj";
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const formData = new FormData();
    formData.append("file", ev.target.files[0]);
    formData.append("upload_preset", PRESET_NAME);

    return fetch(UPLOAD_URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div>
        <h1>Tell us about yourself</h1>
        <div>Write a short description about yourself</div>
        <div>
          <input type="text" className="experience-input"></input>
        </div>
        <div>Add a profile picture</div>
        <input onChange="uploadImg(event)" type="file"></input>
        <div>Add photos that describes you best</div>
        <input onChange="uploadImg(event)" type="file"></input>
      </div>
    );
  }
}
