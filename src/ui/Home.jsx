import Banner from '../sections/home/Banner';
import NavMenu from '../components/NavMenu';
import Feature from '../sections/home/Feature';
import Cta from '../sections/home/Cta';

const Home = () => {
  return (
    <>
      <NavMenu />
      <Banner />
      <Feature />
      <Cta />
    </>
  );
};

export default Home;
