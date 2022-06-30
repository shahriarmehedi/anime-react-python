import React from 'react';
import { Link } from 'react-router-dom';

const LatestEpisodes = ({ latestEpisodes }) => {
    //const url = process.env.DEPLOYEDURL;



    if (!latestEpisodes.length) {
        return (
            <div className='h-20 flex justify-center items-center'>
                <button className="btn loading">loading...</button>
            </div>
        )
    }


    return (
        <div className='w-5/6 mx-auto pb-10'>
            <h1 className='py-5 text-2xl font-semibold text-white'>Latest Episodes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 cursor-pointer'>
                {latestEpisodes.map(episode => {
                    const id_name = episode.id_name;
                    return (
                        <div key={episode.id}>
                            <Link to={`/episodes/${id_name}`}>
                                <div className="hover:scale-110  relative flex justify-center items-center transition duration-300 hover:text-white">
                                    <img className='mx-auto object-cover hover:opacity-90 transition duration-300 opacity-70 border-[3px] shadow rounded-md border-white' src={`https://anime-python-backend.herokuapp.com${episode.image}`} alt={episode.title} />
                                    <button className="absolute">
                                        <i className="bi bi-play-circle-fill text-4xl shadow-lg opacity-80 text-white"></i>
                                    </button>
                                </div>
                            </Link>
                            <h2 className='py-2 text-center  font-semibold'>{episode.title}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default LatestEpisodes;