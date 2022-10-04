import React, { useState } from "react";

function Cloudinary() {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "repasAbord");
    data.append("cloud_name", "dbkscupri");
    fetch("  https://api.cloudinary.com/v1_1/dbkscupri/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data1) => {
        setUrl(data1.url);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="button" onClick={uploadImage}>
          Upload
        </button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        <img src={url} alt={image.name} />
      </div>
    </div>
  );
}
export default Cloudinary;
