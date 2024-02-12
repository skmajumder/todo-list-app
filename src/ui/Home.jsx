import Banner from '../sections/home/Banner';
import Feature from '../sections/home/Feature';
import Cta from '../sections/home/Cta';
import Footer from '../components/Footer';
import Main from '../components/Main';

const Home = () => {
  return (
    <>
      <Banner />
      <Main>
        <Feature />
        <Cta />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
