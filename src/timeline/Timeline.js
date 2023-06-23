import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts] = useState([
    
    {
      user: "kendalljenner👑",
      postImage:
        "https://tse1.mm.bing.net/th?id=OIP.6HMMzR6cY7hfh7qs1bVoVwHaFj&pid=Api&P=0",
      likes: 5400000,
      timestamp: "2d",
    },
    {
      user: "astronomy_hub",
      postImage:
        "https://astronomy.com/-/media/Images/News%20and%20Observing/News/2017/04/ASYGI0415_1.jpg?mw=600",
      likes: 140000,
      timestamp: "2d",
    },
    
    {
      user: "astronomy_HUB",
      postImage:
        "https://static.scientificamerican.com/sciam/cache/file/6A1D320D-B844-4467-B5834B78B41E32F5_source.jpg",
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
      user: "astronomy_HUB",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6j7aaAd9vUBZuGv_zuPIYGtWsrwlWbXN7fg&usqp=CAU",
      likes: 140000,
      timestamp: "2d",
    },
    {
      user: "astronomy_HUB",
      postImage:
        "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/13f3pmrd77flch8g_1682341452.jpeg",
      likes: 140000,
      timestamp: "2d",
    },

    {
      user: "astronomy_HUB",
      postImage:
        "https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/edu_astronomy_large.jpg?itok=PTwvbMlT",
      likes: 140000,
      timestamp: "2d",
    },
   
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;