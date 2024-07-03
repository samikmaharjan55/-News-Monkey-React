import axios from "axios";
import React from "react";

const Test = () => {
  async function handlePost() {
    const response = await axios
      .post("https://dummyjson.com/auth/login", {
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30,
      })
      .then((res) => res.status);
    if (response === 200) {
      console.log("sucess");
    } else {
      console.log("failed");
    }
  }
  return (
    <div>
      <button onClick={handlePost}>post</button>
    </div>
  );
};

export default Test;
