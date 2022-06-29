
import Navbar from '../../components/common/Navbar';
import LatestAddedAnimes from '../../components/LatestAddedAnimes/LatestAddedAnimes';
import LatestEpisodes from '../../components/LatestEpisodes/LatestEpisodes';
import RandomAnime from '../../components/RandomAnime/RandomAnime';
import Slider from '../../components/Slider';



const Home = ({latestAnimes, randomAnimes, latestEpisodes}) => {

    return (
        <div>
            <Navbar />
            <Slider />
            <LatestEpisodes latestEpisodes={latestEpisodes} />
            <LatestAddedAnimes latestAnimes={latestAnimes} />
            {/* <RecommendedAnime /> */}
            <RandomAnime randomAnimes={randomAnimes} />
        </div>
    );
};

export default Home;