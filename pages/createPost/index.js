import axios from "axios";
import { useState } from "react";

const Posts = () => {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const initialValues = {
    title: "",
    body: "",
    userName: localStorageData.name,
    userAvatar: localStorageData.avatar,
    userId: new Date(),
  };

  const [postData, setPostData] = useState(initialValues);
  const changeData = (event) => {
    setPostData({
      ...postData,
      [event.target.id]: event.target.value,
    });
  };
  const onSubmitPost = (event) => {
    console.log(postData);
    event.preventDefault();
    axios.post("https://isdi-blog-posts-api.herokuapp.com/posts", postData);
  };

  return (
    <div className="form-style">
      <form onSubmit={onSubmitPost}>
        <div className="form-group">
          <label htmlFor="title">Title Post</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter post title"
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Post Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter post description"
            onChange={changeData}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default Posts;
