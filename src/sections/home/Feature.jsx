import { features } from '../../constants';

const Feature = () => {
  return (
    <section className="py-10">
      <div className="space-y-12">
        <h2 className="text-center text-xl font-bold leading-tight text-black md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight">
          Don’t let your day doing nothing
        </h2>
        <ul className="grid grid-cols-2 justify-items-center gap-4 space-y-4 md:grid-cols-4 lg:grid-cols-4">
          {features.map((feature) => (
            <li
              key={feature.id}
              className="flex flex-col items-center justify-center text-center"
            >
              <img src={feature.icon} alt={feature.title} />
              <p className="font-medium">{feature.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Feature;
