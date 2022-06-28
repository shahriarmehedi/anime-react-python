import React, { useState, useContext, useEffect } from 'react';
import Navbar from '../../components/common/Navbar';
import { AnimeContext } from '../../App';
import { useParams } from 'react-router';

const Anime = () => {

    let { animeId } = useParams();



    const [anime, setAnime] = useState([]);
    const [singleAnime, setSingleAnime] = useState({});

    // console.log(animes);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASEURL}/anime-info`)
            .then(res => res.json())
            .then(data => {
                if (data['info']) {
                    setAnime(data['info']);
                    console.log(data);
                }
            })
            .catch(err => console.log(err));
    }, []);

    // FINDING MATCHING DATA
    useEffect(() => {
        const foundAnime = anime.find(newAnime => newAnime.id_name === animeId);
        setSingleAnime(foundAnime);
    }, [anime]);



    if (anime.length === 0) {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <button className="btn loading">loading...</button>
            </div>
        )

    }

    return (
        <div>
            <Navbar />
            <div>
                <img className='w-full h-[250px] object-cover' src={singleAnime && `data:image/png;base64,${singleAnime['banner']}`} alt="" />
                <div className='absolute top-[230px] left-[380px] w-[62%]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <h1 className='text-center text-white text-2xl font-semibold' >{singleAnime?.title}</h1>
                            <div className="badge badge-accent mx-2">{singleAnime?.type}</div>
                        </div>
                        <div>
                            <button className="btn bg-zinc-700 text-gray-200 btn-sm  gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                Add to favorites
                            </button>
                        </div>
                    </div>
                    <h2 className=' text-gray-400 py-1'>{singleAnime.debut}</h2>

                </div>
            </div>
            <div className='flex w-5/6 mx-auto'>
                <div className='w-[20%] mx-auto relative bottom-28'>
                    <img className=' transition duration-300 border-[5px] shadow rounded-md border-white' alt="" src={singleAnime && `data:image/png;base64,${singleAnime['poster']}`} />
                </div>
                <div className='w-[75%] pl-5 h-[165px] mt-[20px] mx-auto bg-white shadow rounded'>
                    <h3 className='py-2 pt-5 text-2xl font-bold text-gray-700'>Synopsis</h3>
                    <div>
                        {singleAnime && anime.genres.map(genre => {
                            return <div className="badge hover:bg-sky-500 hover:text-white mr-1 border-none bg-sky-200 text-sky-700 cursor-pointer">{genre}</div>
                        })}
                    </div>
                    <p className='py-2 text-xs overflow-auto pr-5'>{singleAnime && anime.synopsis}</p>
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
                        singleAnime && singleAnime['episodes'].map(episode => {
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