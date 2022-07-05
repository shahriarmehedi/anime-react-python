import React, { useState, useEffect } from 'react';
import Navbar from '../../components/common/Navbar';
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';

const Anime = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const backToTop = () => {
            window.scrollTo({
                top: 0,
            });
        }
        backToTop();
    }, []);

    const { animeId } = useParams();


    const [anime, setAnime] = useState([]);
    const [favorite, setFavorite] = useState(false);

    // console.log(animes);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASEURL}/anime-info/${animeId}`)
            .then(res => res.json())
            .then(data => {
                if (data['info']) {
                    setAnime(data['info']);
                    console.log(data['info']);
                }
            })
            .catch(err => console.log(err));
    }, [animeId]);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            fetch(`${process.env.REACT_APP_BASEURL}/check-favorite`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    animeId: animeId
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data['favorite']) {
                        setFavorite(true);
                    }
                }).catch(err => console.log(err));
        }
    }, [animeId]);


    const addToFavorites = () => {
        if (localStorage.getItem('token') === null) {
            navigate('/login');
            return
        }

        fetch(`${process.env.REACT_APP_BASEURL}/add-to-favorites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                animeId: animeId,
                posterUrl: anime.poster_url,
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data['success']) {
                    setFavorite(true);
                }
            })
            .catch(err => console.log(err));
    }


    const removeFromFavorites = () => {
        fetch(`${process.env.REACT_APP_BASEURL}/remove-from-favorites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                animeId: animeId,
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data['success']) {
                    setFavorite(false);
                }
            })
            .catch(err => console.log(err));
    }



    if (anime.length === 0) {
        return (
            <>
                <Navbar />
                <div className='min-h-screen bg-zinc-800 flex justify-center items-center'>
                    <button className="btn loading">loading...</button>
                </div>
            </>
        )

    }

    return (
        <div>
            <Navbar />
            <div>
                <img className='w-full h-[320px] lg:h-[250px] object-cover' src={anime && `data:image/png;base64,${anime['banner']}`} alt="" />

            </div>
            <div className='flex flex-col lg:flex-row w-5/6 mx-auto'>
                <div className='w-[50%] lg:w-[20%] mx-auto relative bottom-16 lg:bottom-28'>
                    <img className=' transition duration-300 border-[5px] shadow rounded-md border-white' alt="" src={anime && `data:image/png;base64,${anime['poster']}`} />
                </div>
                <div className='px-5 lg:px-0 lg:w-[75%] lg:pl-5 lg:h-[190px] lg:overflow-hidden lg:mt-[20px] mx-auto bg-white shadow rounded'>


                    {/* ------------FOR DESKTOP-------- */}
                    <div className='hidden lg:block text-center lg:text-left absolute top-[100px] w-5/6 lg:w-full mx-auto lg:top-[200px]'>
                        <div className='flex flex-col lg:flex-row items-center lg:justify-between lg:w-5/6 mt-12 lg:mt-0'>
                            <div className='flex flex-col lg:flex-row items-center'>
                                <h1 className=' text-white text-xl lg:text-2xl font-semibold max-w-2xl' >{anime?.title}</h1>
                                <div className="badge badge-accent mt-5 lg:m-2">{anime?.type}</div>
                            </div>

                        </div>
                        <div className='py-3 mt-2 lg:py-0'>
                            {favorite ? (
                                <button onClick={removeFromFavorites} className="btn bg-zinc-700 text-rose-500 btn-sm  gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill='currentColor' viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    Favorite
                                </button>
                            ) : (
                                <button onClick={addToFavorites} className="btn bg-zinc-700 text-gray-200 btn-sm  gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill='none' viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    Add to favorites
                                </button>
                            )}
                        </div>
                    </div>


                    {/* ------------FOR MOBILE-------- */}
                    <div className='lg:hidden text-center  absolute top-[100px] left-0 right-0 w-5/6  mx-auto '>
                        <div className='flex flex-col lg:flex-row items-center lg:justify-between lg:w-5/6 mt-12 lg:mt-0'>
                            <div className='flex flex-col lg:flex-row items-center'>
                                <h1 className=' text-white text-xl lg:text-2xl font-semibold max-w-2xl' >{anime?.title}</h1>
                                <div className="badge badge-accent mt-5 lg:m-2">{anime?.type}</div>
                            </div>

                        </div>
                        <div className='py-3 mt-2 lg:py-0'>
                            {favorite ? (
                                <button onClick={removeFromFavorites} className="btn text-rose-500 bg-zinc-700  btn-sm  gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill='currentColor' viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    Favorite
                                </button>
                            ) : (
                                <button onClick={addToFavorites} className="btn bg-zinc-700 text-gray-200 btn-sm  gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill='none' viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    Add to favorites
                                </button>
                            )}
                        </div>
                    </div>
                    <h3 className='py-2 pt-5 text-2xl font-bold text-gray-700'>Synopsis</h3>
                    <div>
                        {anime && anime.genres.map((genre, index) => {
                            return <div key={index} className="badge hover:bg-sky-500 hover:text-white mr-1 border-none bg-sky-200 text-sky-700 cursor-pointer">{genre}</div>
                        })}
                    </div>
                    <p className='py-2 text-xs overflow-auto pr-5'>{anime && anime.synopsis}</p>
                    {/* <h4> <i className="bi bi-arrow-right-circle-fill text-sky-500"></i> <span className='font-bold text-sm'>Tate no Yuusha no Nariagari</span> (Precuela)</h4> */}
                </div>

            </div>


            {/* LIST OF EPISODES */}
            <div div className='flex flex-col lg:flex-row w-5/6 mx-auto relative mt-10 lg:mt-0  mb-10 lg:bottom-20 ' >
                <div className='lg:w-[20%] mx-auto'>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/91QEHqpNzML._SL500_.png" alt="" />
                    <img className='pt-7' src="https://images-na.ssl-images-amazon.com/images/I/91QEHqpNzML._SL500_.png" alt="" />

                </div>
                <div className='lg:w-[75%] mx-auto bg-white rounded my-10 lg:my-0  h-[830px] overflow-y-auto'>
                    <div className='bg-white flex items-center justify-between my-3 mx-5 sticky top-0'>
                        <h3 className='py-2 lg:text-2xl font-bold text-gray-700'>List of episodes</h3>

                    </div>

                    {/*--------- E P I S O D E S---------- */}

                    {
                        anime && anime['episodes'].map(episode => {
                            // replate / to -slash- of episode_id
                            const episode_id = episode['id'].replace(/\//g, '-slash-');
                            return (
                                <>
                                    <Link to={`/episodes/${episode_id}`}>
                                        <div className='flex px-5 items-center my-5 hover:text-sky-500'>
                                            <div className='hidden lg:block'>
                                                <i className="bi bi-play-circle-fill text-3xl text-sky-500"></i>
                                            </div>
                                            <div className='rounded'>
                                                <img className='object-contain h-24  px-5' src={`data:image/png;base64,${episode['imagePreview']}`} alt="" />
                                            </div>
                                            <div>
                                                <h3 className='font-bold text-gray-700 font-lg'>{episode.title}</h3>
                                                <h3>Episode: {episode.episode} </h3>
                                            </div>

                                        </div>
                                        <hr className='border-gray-200' />
                                    </Link>
                                </>

                            )
                        })
                    }
                </div>
            </div >



        </div >
    );
};

export default Anime;