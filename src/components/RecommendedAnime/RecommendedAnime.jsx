import React from 'react';

const RecommendedAnime = () => {
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


    if (latestEpisodes.length > 0) {
        return (
            <div className='h-20 flex justify-center items-center'>
                <button class="btn loading">loading...</button>
            </div>
        )
    }

    return (
        <div className='w-5/6 mx-auto pb-10'>
            <h1 className='py-5 text-2xl font-semibold'>Recommended for you</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 cursor-pointer'>
                {latestEpisodes.map(episode => (
                    <div key={episode.id}>

                        <img className='mx-auto opacity-70' src={episode.image} alt={episode.title} />
                        <h2 className='py-2 text-center text-xl font-semibold'>{episode.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendedAnime;