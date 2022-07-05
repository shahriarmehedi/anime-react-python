import React, { useEffect, useState } from 'react';
import Navbar from '../../components/common/Navbar';
import FavoriteItem from './FavoriteItem';

const MyFavoritesAnimes = () => {
    const [animes, setAnimes] = useState([]);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASEURL}/get-favorites`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data['results']);
                if (data['results'].length) {
                    setAnimes(data['results'])
                }
            }
            )
            .catch(err => console.log(err));
    }, []);


    if (!animes.length) {
        return (
            <>
                <Navbar />
                <div className=' h-[40vw] bg-zinc-800  flex flex-col justify-center items-center'>
                    <h1>You have no favorite animes.</h1>
                </div>
            </>
        )
    }


    return (
        <div className='bg-zinc-800'>
            <Navbar />

            <div className='w-5/6 mx-auto'>
                <h1 className='text-2xl font-semibold text-white py-10'>My Favorites Animes</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 cursor-pointer'>
                    {animes.map(anime => {
                        let id_name = anime.anime; // "/anime/kaginado-season-2"
                        // replace /anime/ to ""
                        id_name = id_name.replace('anime/', '');
                        return <FavoriteItem key={id_name} id_name={id_name} anime={anime} />
                    })}
                </div>
            </div>

        </div>
    );
};

export default MyFavoritesAnimes;