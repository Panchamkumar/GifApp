import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "SANESUDNT5jGPgDsyGJSqki9Tog9VSHl";

const Random = () => {
  const [tag, setTag] = useState("dogs");
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const { data } = await axios.get(url);

    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="right-tag">
      <h1>Random {tag} Gif</h1>
      <img
        className="right-img"
        width="500"
        height="400"
        src={gif}
        alt="Random Gif"
      />
      <br />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <br />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};

export default Random;
