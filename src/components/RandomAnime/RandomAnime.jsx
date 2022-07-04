import React from 'react';
import { Link } from 'react-router-dom';

const RandomAnime = ({randomAnimes}) => {

    if (!randomAnimes.length) {
        return (
            <div className='h-20 flex justify-center items-center'>
                <button className="btn loading">loading...</button>
            </div>
        )
    }

    const handleImageError = (id_name) => {
        console.log(`Image not found for ${id_name}`);
        fetch(`${process.env.REACT_APP_BASEURL}/fix-anime-image`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    animeId: id_name,
                    }),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.log(err));

    }

    return (
        <div className='w-5/6 mx-auto pb-10'>
            <h1 className='py-5 text-2xl font-semibold text-white'>Random Animes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 cursor-pointer'>
                {randomAnimes.map(anime => {
                    let id_name = anime.id_name.replace('/anime/', '');
                    return(
                        <div key={anime.id}>
                            <Link to={`/anime-info/${id_name}`}>
                            <div className="hover:scale-110  relative flex justify-center items-center transition duration-300 hover:text-white">
                                <img onError={(event)=>handleImageError(id_name)} className='mx-auto hover:opacity-90 transition duration-300 opacity-70 border-[3px] shadow rounded-md border-white' src={`${process.env.REACT_APP_BASEURL}${anime.image}`} alt={anime.title} />
                                <button className="absolute">
                                    <i className="bi bi-play-circle-fill text-4xl shadow-lg opacity-80 text-white"></i>
                                </button>
                            </div>
                        </Link>
                        <h2 className='py-2 text-center font-semibold'>{anime.title}</h2>
                    </div>
                    )})}
            </div>
        </div>
    );
};

export default RandomAnime;