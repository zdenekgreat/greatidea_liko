'use client';
import React from 'react';

const VideOne = () => {

    const [showVideo, setShowVideo] = React.useState(false);

    React.useEffect(() => {
      const onScroll = () => {
        setShowVideo(true);
        window.removeEventListener('scroll', onScroll);
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
      <div className="tp-hero-bottom-img-wrap">
        <div className="tp-hero-bottom-img">
          {showVideo ? (
            <video loop={true} muted={true} autoPlay={true} playsInline={true} poster="/assets/img/home-01/hero/hero-1-1.png">
              <source src="https://html.aqlova.com/videos/liko/liko.mp4" type="video/mp4" />
            </video>
          ) : (
            <img src="/assets/img/home-01/hero/hero-1-1.png" alt="video placeholder" style={{width:'100%',height:'auto'}} />
          )}
        </div>
      </div>
    );
};

export default VideOne;