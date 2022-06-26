import React, {useState, useEffect} from 'react';

const RandomAnime = () => {
    // const latestEpisodes = [
    //     {
    //         id: 1,
    //         title: 'Eposide 1',
    //         image: 'https://api.lorem.space/image/movie?w=200&h=280',
    //     },
    //     {
    //         id: 2,
    //         title: 'Eposide 2',
    //         image: 'https://api.lorem.space/image/movie?w=200&h=280',
    //     },
    //     {
    //         id: 3,
    //         title: 'Eposide 3',
    //         image: 'https://api.lorem.space/image/movie?w=200&h=280',
    //     },
    //     {
    //         id: 4,
    //         title: 'Eposide 4',
    //         image: 'https://api.lorem.space/image/movie?w=200&h=280',
    //     }

    // ];
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        fetch('https://anime-python-backend.herokuapp.com/browse-animes')
            .then(res => res.json())
            .then(data => {
                setAnimes(data);
                console.log(data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='w-5/6 mx-auto pb-10'>
            <h1 className='py-5 text-2xl font-semibold'>Random Animes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 cursor-pointer'>
                {animes.map(anime => (
                    <div key={anime.id}>

                        <img className='mx-auto opacity-70' src={`https://anime-python-backend.herokuapp.com${anime.image}`} alt={anime.title} />
                        <h2 className='py-2 text-center text-xl font-semibold'>{anime.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RandomAnime;