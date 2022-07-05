import React from 'react';
import Navbar from '../../components/common/Navbar';

const MyFavoritesAnimes = () => {
    return (
        <div>
            <Navbar />

            <div className='w-5/6 mx-auto'>
                <h1 className='text-2xl font-semibold text-white py-10'>My Favorites Animes</h1>

                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 p-4">
                        <div className="hover:scale-110  relative flex justify-center items-center transition duration-300 hover:text-white">
                            <img
                                className="mx-auto h-60 w-48 object-cover hover:opacity-90 transition duration-300 opacity-70 border-[3px] shadow rounded-md border-white"
                                src=""
                                alt="anime"
                            />
                            <button className="absolute">
                                <i className="bi bi-play-circle-fill text-4xl shadow-lg opacity-80 text-white"></i>
                            </button>

                            <h2 className="py-4 text-center font-semibold">
                                anime title
                            </h2>

                            <p className="py-4 text-center">
                                anime description
                            </p>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyFavoritesAnimes;