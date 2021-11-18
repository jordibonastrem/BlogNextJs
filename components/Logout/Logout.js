import { useState, useEffect } from "react";

const LogoutComponent = () => {
  const onClick = () => {
    localStorage.removeItem("Avatar");
  };
  return (
    <button
      // disabled={buttonDisabled}
      type="submit"
      className="btn btn-primary"
      onClick={onClick}
    >
      Logout
    </button>
  );
};

export default LogoutComponent;
