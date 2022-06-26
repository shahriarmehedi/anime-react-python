import React, {useState, useEffect} from 'react';


const LatestEpisodes = () => {

    const [latestEpisodes, setLatestEpisodes] = useState([]);

    useEffect(() => {
        fetch('https://anime-python-backend.herokuapp.com/latest-episodes')
            .then(res => res.json())
            .then(data => {
                setLatestEpisodes(data);
                console.log(data);
            })
            .catch(err => console.log(err));
    }, []);


    return (
        <div className='w-5/6 mx-auto pb-10'>
            <h1 className='py-5 text-2xl font-semibold'>Latest Episodes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 cursor-pointer'>
                {latestEpisodes.map(episode => (
                    <div key={episode.id}>
                        <img className='mx-auto opacity-70' src={`https://anime-python-backend.herokuapp.com${episode.image}`} alt={episode.title} />
                        <h2 className='py-2 text-center text-xl font-semibold'>{episode.title} | {episode.episode}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestEpisodes;