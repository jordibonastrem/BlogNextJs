import { useState, useEffect } from "react";

const FormAvatar = () => {
  const initialValues = {
    name: "",
    url: "",
  };

  const [AvatarData, setAvatarData] = useState(initialValues);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const resetForm = () => {
    setAvatarData(initialData);
  };
  const changeData = (event) => {
    setAvatarData({
      ...AvatarData,
      [event.target.id]: event.target.value,
    });
  };
  const onSubmitPost = async (event) => {
    event.preventDefault();
    console.log(AvatarData);
    localStorage.setItem("Avatar", JSON.stringify(AvatarData));
  };

  // useEffect(() => {
  //   setButtonDisabled(AvatarData.name === "");
  // }, [AvatarData.imgSrc]);

  return (
    <div className="form-style">
      <h1>LOGIN:</h1>
      <form onSubmit={onSubmitPost}>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            onChange={changeData}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="url"></label>
          <input
            onChange={changeData}
            type="text"
            className="form-control"
            id="url"
            placeholder="Enter url of image"
          />
        </div>
        <a
          className="avatar avatar-l
         rounded-circle"
        >
          <img
            alt="Image placeholder"
            src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"
          />
        </a>
        <button
          // disabled={buttonDisabled}
          type="submit"
          className="btn btn-primary"
        >
          SubmitAvatar
        </button>
      </form>
    </div>
  );
};

export default FormAvatar;
