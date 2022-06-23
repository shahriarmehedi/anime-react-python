import React from 'react';

const Slider = () => {
    return (
        <>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full max-h-screen">
                    <img src="https://www.teahub.io/photos/full/113-1137876_anime-guns-weapons-manga-anime-girls-white-background.jpg" class="w-full object-cover" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full max-h-screen">
                    <img src="https://www.teahub.io/photos/full/67-670663_hollywood-movie-poster-hd.jpg" class="w-full object-cover" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full max-h-screen">
                    <img src="https://www.teahub.io/photos/full/67-670663_hollywood-movie-poster-hd.jpg" class="w-full object-cover" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full max-h-screen">
                    <img src="https://www.teahub.io/photos/full/67-670663_hollywood-movie-poster-hd.jpg" class="w-full object-cover" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;