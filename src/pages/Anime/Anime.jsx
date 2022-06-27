import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';

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


    const [allEpisodes, setAllEpisodes] = useState(episodes);


    return (
        <div>
            <Navbar />
            <div>
                <img className='w-full h-[250px] object-cover' src="https://wallpapercave.com/wp/wp5224460.jpg" alt="" />
                <div className='absolute top-[230px] left-[380px]'>
                    <div className='flex items-center'>
                        <h1 className='text-center text-white text-2xl font-semibold'>Anime Title</h1>
                        <div class="badge badge-accent mx-2">Anime</div>
                    </div>
                    <h2 className=' text-gray-400 py-1'>境界戦機</h2>
                </div>
            </div>
            <div className='flex w-5/6 mx-auto'>
                <div className='w-[20%] mx-auto relative bottom-28'>
                    <img className=' transition duration-300 border-[5px] shadow rounded-md border-white' src="https://wallpapercave.com/wp/wp6409639.jpg" alt="" />
                </div>
                <div className='w-[75%] pl-5 h-[165px] mt-[20px] mx-auto bg-white shadow rounded'>
                    <h3 className='py-2 pt-5 text-2xl font-bold text-gray-700'>Sinopsis</h3>
                    <div>
                        <div className="badge hover:bg-sky-500 hover:text-white mr-1 border-none bg-sky-200 text-sky-700 cursor-pointer">accent</div>
                        <div className="badge hover:bg-sky-500 hover:text-white mx-1 border-none bg-sky-200 text-sky-700 cursor-pointer">accent</div>
                        <div className="badge hover:bg-sky-500 hover:text-white mx-1 border-none bg-sky-200 text-sky-700 cursor-pointer">accent</div>
                        <div className="badge hover:bg-sky-500 hover:text-white mx-1 border-none bg-sky-200 text-sky-700 cursor-pointer">accent</div>
                    </div>
                    <h3 className='py-2 text-xs'>Segunda temporada de Tate no Yuusha no Nariagari</h3>
                    <h4> <i class="bi bi-arrow-right-circle-fill text-sky-500"></i> <span className='font-bold text-sm'>Tate no Yuusha no Nariagari</span> (Precuela)</h4>
                </div>

            </div>


            {/* LIST OF EPISODES */}
            <div div className='flex w-5/6 mx-auto relative bottom-20' >
                <div className='w-[20%] mx-auto'>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/91QEHqpNzML._SL500_.png" alt="" />
                    <img className='pt-7' src="https://images-na.ssl-images-amazon.com/images/I/91QEHqpNzML._SL500_.png" alt="" />

                </div>
                <div className='w-[75%] mx-auto bg-white rounded  h-[600px] overflow-y-auto'>
                    <div className='bg-white flex items-center justify-between mt-3 mx-5 sticky top-0'>
                        <h3 className='py-2 text-2xl font-bold text-gray-700 mb-5'>List of episodes</h3>
                        <div>
                            <input type="text" placeholder="Search here..." class="input input-bordered input-info w-full max-w-xs" />
                        </div>
                    </div>

                    {/*--------- E P I S O D E S---------- */}

                    {
                        allEpisodes.map(episode => {
                            return (
                                <>
                                    <div className='flex px-5 items-center my-5 hover:text-sky-500'>
                                        <div>
                                            <i class="bi bi-play-circle-fill text-3xl text-sky-500"></i>
                                        </div>
                                        <div className='rounded'>
                                            <img className=' h-24  px-5' src={episode.image} alt="" />
                                        </div>
                                        <div>
                                            <h3 className='font-bold text-gray-700 font-lg'>{episode.title}</h3>
                                            <h3> {episode.episode_no} </h3>
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