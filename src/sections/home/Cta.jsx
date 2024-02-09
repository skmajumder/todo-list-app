import { cta } from '../../assets';
import LinkButton from '../../components/LinkButton';

const Cta = () => {
  return (
    <section className="py-10">
      <div className="flex flex-col items-center justify-center gap-5 md:flex-col lg:flex-row">
        <img src={cta} alt="CTA" />
        <div className="text-center md:text-center lg:text-left">
          <h2 className="mb-7 text-xl font-bold leading-tight text-black md:mb-7 md:text-3xl md:leading-tight lg:mb-7 lg:text-4xl lg:leading-tight">
            Achieve your target <br /> and won your life
          </h2>
          <LinkButton
            to={'/'}
            extraclass="rounded-md bg-[#FF4F5A] px-5 py-2 text-xl !text-white"
          >
            Get started
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Cta;
