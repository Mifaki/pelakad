import { SERVICE_DATA } from '~/app/models/ServiceMenu';
import ServiceCard from '../card/ServiceCard';

const ServiceSection = () => {
  return (
    <section className="container max-w-[100vw] overflow-hidden bg-pd-primary md:bg-[url('https://utfs.io/f/46536ca7-1783-4dbe-89d4-4566542b630c-4q1go2.png')] md:pb-[100px]">
      <h2 className="text-center text-heading-4 font-bold md:mt-[100px] md:text-heading-2">
        Layanan
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-[100px] md:mt-[100px] md:grid-cols-2 md:gap-9 lg:grid-cols-4">
        {SERVICE_DATA.map((item) => (
          <ServiceCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
