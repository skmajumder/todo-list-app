import { banner } from '../assets';
import LinkButton from './LinkButton';

const Banner = () => {
  return (
    <section className="py-10" role="banner">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="text-center text-2xl font-bold leading-tight text-black md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
          Organizing your day activity <br /> with Todo Daily
        </h1>
        <LinkButton
          to={'/'}
          extraclass="rounded-md bg-[#FF4F5A] px-5 py-2 text-xl !text-white"
        >
          Get started
        </LinkButton>
        <img src={banner} alt="Hero Image" className="h-auto" />
      </div>
    </section>
  );
};

export default Banner;
