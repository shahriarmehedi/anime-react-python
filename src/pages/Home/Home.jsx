
import Navbar from '../../components/common/Navbar';
import LatestAddedAnimes from '../../components/LatestAddedAnimes/LatestAddedAnimes';
import LatestEpisodes from '../../components/LatestEpisodes/LatestEpisodes';
import RandomAnime from '../../components/RandomAnime/RandomAnime';
import RecommendedAnime from '../../components/RecommendedAnime/RecommendedAnime';
import Slider from '../../components/Slider';



const Home = () => {

    return (
        <div>
            <Navbar />
            <Slider />
            <LatestEpisodes />
            <LatestAddedAnimes />
            {/* <RecommendedAnime /> */}
            <RandomAnime />
        </div>
    );
};

export default Home;