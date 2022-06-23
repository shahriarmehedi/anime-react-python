import React from 'react';

const LatestEpisodes = () => {

    const latestEpisodes = [
        {
            id: 1,
            title: 'Eposide 1',
            image: 'https://api.lorem.space/image/movie?w=200&h=280',
        },
        {
            id: 2,
            title: 'Eposide 2',
            image: 'https://api.lorem.space/image/movie?w=200&h=280',
        },
        {
            id: 3,
            title: 'Eposide 3',
            image: 'https://api.lorem.space/image/movie?w=200&h=280',
        },
        {
            id: 4,
            title: 'Eposide 4',
            image: 'https://api.lorem.space/image/movie?w=200&h=280',
        }


    ];


    return (
        <div className='w-5/6 mx-auto pb-10'>
            <h1 className='py-5 text-2xl font-semibold'>Latest Episodes</h1>
            <div className='grid grid-cols-4 gap-5 cursor-pointer'>
                {latestEpisodes.map(episode => (
                    <div key={episode.id}>
                        <h2 className='py-2 text-xl font-semibold'>{episode.title}</h2>
                        <img className=' opacity-70' src={episode.image} alt={episode.title} />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestEpisodes;