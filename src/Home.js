import React from 'react'
import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeline/Timeline";
function Home() {
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
         <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  )
}

export default Home