import React, { useState } from "react";
import Input from "../Components/common/Input";
import axios from "axios";
function Test() {
  const [credentials, setcredentials] = useState();

  const handleUpload = (e) => {
    setcredentials({ ...credentials, image: e.target.files[0] });
    console.log(credentials);
  };

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", credentials.image);
    try {
      const resp = await axios.post(
        "https://api.imgbb.com/1/upload?key=bb0e3b9f7ea1d5279df7c88644f0fa79",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submit} className="my-44 grid place-content-center gap-10">
      <input onChange={handleUpload} type="file" />
      <Input
        set={setcredentials}
        name="name"
        title="Category Name"
        placeholder="Category Name"
      />
      <button type="submit" className="Button px-4">
        Submit
      </button>
    </form>
  );
}

export default Test;
