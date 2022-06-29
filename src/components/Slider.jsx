import React from 'react';

const Slider = () => {



    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full max-h-[60vw] lg:max-h-[35vw]">
                    <img src="https://wallpaperaccess.com/full/21593.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full max-h-[60vw] lg:max-h-[35vw]">
                    <img src="https://free4kwallpapers.com/uploads/originals/2021/05/08/anime-scenery-k-sx-wallpaper.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Slider;