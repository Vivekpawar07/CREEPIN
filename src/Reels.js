import React, { useState } from "react";
import Reellayout from "./Reellayout";


function Reels() {
  const [posts] = useState([
    
    {
      user: "kendalljenner👑",
      postImage:
        "https://www.kapwing.com/videos/644ce9c7e7c6e70011539d19",
      likes: 5400000,
      timestamp: "2d",
    },
    {
      user: "MEME_HUB",
      postImage:
        "https://i.ibb.co/34wN4sX/7hknoz.jpg",
      likes: 140000,
      timestamp: "2d",
    },
    
    {
      user: "MEME_HUB",
      postImage:
        "https://i.ibb.co/48wnpCQ/7hklcm.jpg",
      likes: 140000,
      timestamp: "2d",
    },
    {
      user: "zendaya👑",
      postImage:
        "https://www.hawtcelebs.com/wp-content/uploads/2015/07/zendaya-coleman-at-4th-annual-beautycon-in-los-angeles_28.jpg",
      likes: 140000,
      timestamp: "2d",
    },
    {
      user: "MEME_HUB",
      postImage:
        "https://i.ibb.co/DYnNVgd/7hfgka.jpg",
      likes: 140000,
      timestamp: "2d",
    },
    {
      user: "MEME_HUB",
      postImage:
        "https://i.ibb.co/2qRvp1N/7hffj6.jpg",
      likes: 140000,
      timestamp: "2d",
    },
    {
      user: "MEME_HUB",
      postImage:
        "https://i.ibb.co/hDxtXcz/7hfex3.jpg",
      likes: 140000,
      timestamp: "2d",
    },
    {
      user: "MEME_HUB",
      postImage:
        "https://i.ibb.co/MsVvhzv/7hghbj.jpg",
      likes: 140000,
      timestamp: "2d",
    },
    {
      user: "MEME_HUB",
      postImage:
        "https://i.ibb.co/gT2dY67/7hgh3f.jpg",
      likes: 140000,
      timestamp: "2d",
    },
    {
      user: "MEME_HUB",
      postImage:
        "https://i.ibb.co/NxTww0x/7hgial.jpg",
      likes: 140000,
      timestamp: "1d",
    },
    {
      user: "MEME_HUB",
      postImage:
        "https://i.ibb.co/S3jqjLs/7hkt8g.jpg",
      likes: 140000,
      timestamp: "2d",
    },
    {
      user: "MEME_HUB",
      postImage:
        "https://i.ibb.co/PCMJQvT/7hknfe.jpg",
      likes: 140000,
      timestamp: "2d",
    },
    {
      user: "MEME_HUB",
      postImage:
        "https://i.ibb.co/JpQQ8yN/7hkn9e.jpg",
      likes: 140000,
      timestamp: "2d",
    },
    {
      user: "MEME_HUB",
      postImage:
        "https://i.ibb.co/vYS68fQ/7hkkvg.jpg",
      likes: 140000,
      timestamp: "2d",
    },
   
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Reellayout
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
     
    </div>
  );
}


export default Reels;