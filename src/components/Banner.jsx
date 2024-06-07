import React from 'react'
import "./Banner.css"

const Banner = () => {
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhjukkwcishwdbbo3vp5m.jpeg")`,
        backgroundPosition: "center center",
    }}>
        <div className="banner__contents">
            <h1 className="banner__title">Movie Name</h1>
            <div className="banner__buttons">
                <button>Play</button>
                <button>My List</button>
            </div>
        </div>
    </header>
  )
}

export default Banner