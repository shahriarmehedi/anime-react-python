import React, { useState, useContext, useEffect } from 'react';
import Navbar from '../../components/common/Navbar';
import { AnimeContext } from '../../App';

const Anime = () => {

    const episodes = [
        {
            id: 1,
            title: 'Video heading',
            episode_no: 'Episode 1',
            image: 'https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg'

        },
        {
            id: 2,
            title: 'Video heading',
            episode_no: 'Episode 2',
            image: 'https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg'

        },
        {
            id: 3,
            title: 'Video heading',
            episode_no: 'Episode 3',
            image: 'https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg'

        },
        {
            id: 4,
            title: 'Video heading',
            episode_no: 'Episode 4',
            image: 'https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg'

        },
        {
            id: 5,
            title: 'Video heading',
            episode_no: 'Episode 5',
            image: 'https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg'

        },
        {
            id: 6,
            title: 'Video heading',
            episode_no: 'Episode 6',
            image: 'https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg'

        },



    ]

    const animes = useContext(AnimeContext)[0]['id_name'] // "/anime/kaginado-season-2"
    // remove the first char
    const id_name = animes.slice(1)
    
    const [allEpisodes, setAllEpisodes] = useState(episodes);
    const [anime, setAnime] = useState();

    // console.log(animes);

    useEffect(() => {
        const body = {"id_name": id_name}
        fetch(`${process.env.REACT_APP_BASEURL}/anime-info`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(data => {
            if (data['info']) {
                setAnime(data['info']);
                console.log(data);
            }
        })
        .catch(err => console.log(err));
    }, [id_name]);



    return (
        <div>
            <Navbar />
            <div>
                <img className='w-full h-[250px] object-cover' src={anime && `data:image/png;base64,${anime['banner']}`} alt="" />
                <div className='absolute top-[230px] left-[380px]'>
                    <div className='flex items-center'>
                        <h1 className='text-center text-white text-2xl font-semibold' style={{maxWidth:'600px'}}>{anime && anime.title}</h1>
                        <div className="badge badge-accent mx-2">{anime && anime.type}</div>
                    </div>
                    <h2 className=' text-gray-400 py-1'>{anime && anime.debut}</h2>
                </div>
            </div>
            <div className='flex w-5/6 mx-auto'>
                <div className='w-[20%] mx-auto relative bottom-28'>
                    <img className=' transition duration-300 border-[5px] shadow rounded-md border-white' alt=""  src={anime && `data:image/png;base64,${anime['poster']}`} />
                </div>
                <div className='w-[75%] pl-5 h-[165px] mt-[20px] mx-auto bg-white shadow rounded'>
                    <h3 className='py-2 pt-5 text-2xl font-bold text-gray-700'>Synopsis</h3>
                    <div>
                        {anime && anime.genres.map(genre => {
                            return <div className="badge hover:bg-sky-500 hover:text-white mr-1 border-none bg-sky-200 text-sky-700 cursor-pointer">{genre}</div>
                        })}
                        </div>
                    <h3 className='py-2 text-xs'>{anime && anime.synopsis}</h3>
                    {/* <h4> <i className="bi bi-arrow-right-circle-fill text-sky-500"></i> <span className='font-bold text-sm'>Tate no Yuusha no Nariagari</span> (Precuela)</h4> */}
                </div>

            </div>


            {/* LIST OF EPISODES */}
            <div div className='flex w-5/6 mx-auto relative bottom-20' >
                <div className='w-[20%] mx-auto'>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/91QEHqpNzML._SL500_.png" alt="" />
                    <img className='pt-7' src="https://images-na.ssl-images-amazon.com/images/I/91QEHqpNzML._SL500_.png" alt="" />

                </div>
                <div className='w-[75%] mx-auto bg-white rounded  h-[830px] overflow-y-auto'>
                    <div className='bg-white flex items-center justify-between mt-3 mx-5 sticky top-0'>
                        <h3 className='py-2 text-2xl font-bold text-gray-700 mb-5'>List of episodes</h3>
                        <div>
                            <input type="text" placeholder="Search here..." className="input input-bordered input-info w-full max-w-xs" />
                        </div>
                    </div>

                    {/*--------- E P I S O D E S---------- */}

                    {
                        anime && anime['episodes'].map(episode => {
                            return (
                                <>
                                    <div className='flex px-5 items-center my-5 hover:text-sky-500'>
                                        <div>
                                            <i className="bi bi-play-circle-fill text-3xl text-sky-500"></i>
                                        </div>
                                        <div className='rounded'>
                                            <img className=' h-24  px-5' src={`data:image/png;base64,${episode['imagePreview']}`} alt="" />
                                        </div>
                                        <div>
                                            <h3 className='font-bold text-gray-700 font-lg'>{episode.title}</h3>
                                            <h3>Episode: {episode.episode} </h3>
                                        </div>

                                    </div>
                                    <hr className='border-gray-200' />
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