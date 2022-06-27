import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LatestAddedAnimes = () => {



    const [latestAnimes, setLatestAnimes] = useState([]);

    useEffect(() => {
        fetch('https://anime-python-backend.herokuapp.com/latest-animes')
            .then(res => res.json())
            .then(data => {
                setLatestAnimes(data);
                console.log(data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='w-5/6 mx-auto pb-10'>
            <h1 className='py-5 text-2xl font-semibold text-white'>Latest Animes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 cursor-pointer'>
                {latestAnimes.map(anime => (
                    <div key={anime.id}>
                        <Link to="/animes">
                            <div className="hover:scale-110  relative flex justify-center items-center transition duration-300 hover:text-white">
                                <img className='mx-auto hover:opacity-90 transition duration-300 opacity-70 border-[3px] shadow rounded-md border-white' src={`https://anime-python-backend.herokuapp.com${anime.image}`} alt={anime.title} />
                                <button className="absolute">
                                    <i class="bi bi-play-circle-fill text-4xl shadow-lg opacity-80 text-white"></i>
                                </button>
                            </div>
                        </Link>
                        <h2 className='py-4 text-center font-semibold'>{anime.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestAddedAnimes;