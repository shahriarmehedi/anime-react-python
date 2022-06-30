import React, { useEffect, useState } from 'react';
import Navbar from '../../components/common/Navbar';
import { Link, useParams } from 'react-router-dom';
const SearchPage = () => {

    const { searchQuery } = useParams();
    console.log(searchQuery);

    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        setAnimes([])
        fetch(`${process.env.REACT_APP_BASEURL}/search-result/${searchQuery}`)
            .then(res => res.json())
            .then(data => {
                if (data['results'].length) {
                    console.log(data);
                    setAnimes(data['results']);
                }
            }
            )   
            .catch(err => console.log(err));
    }, [searchQuery]);

    if (!animes.length) {
        return (
            <div className=' h-[50vw]  flex justify-center items-center'>
                <button className="btn loading">Searching...</button>
            </div>
        )
    }

    return (
        <div className='bg-zinc-800'>
            <Navbar />
            <div className='w-5/6 mx-auto pb-10'>
                <h1 className='py-5 text-2xl font-semibold text-white'>Search results</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 cursor-pointer'>
                    {animes.map(anime => {
                        let id_name = anime.id; // "/anime/kaginado-season-2"
                        // replace /anime/ to ""
                        id_name = id_name.replace('anime/', '');
                        return (
                            <div key={anime.id}>
                                <Link to={`/anime-info/${id_name}`}>
                                    <div className="hover:scale-110  relative flex justify-center items-center transition duration-300 hover:text-white">
                                        <img className='mx-auto hover:opacity-90 transition duration-300 opacity-70 border-[3px] shadow rounded-md border-white' src={`data:image/png;base64,${anime['poster']}`} alt={anime.title} />
                                        <button className="absolute">
                                            <i className="bi bi-play-circle-fill text-4xl shadow-lg opacity-80 text-white"></i>
                                        </button>
                                    </div>
                                </Link>
                                <h2 className='py-4 text-center font-semibold'>{anime.title}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

export default SearchPage;