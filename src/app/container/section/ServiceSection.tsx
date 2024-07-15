import { SERVICE_DATA } from '~/app/models/ServiceMenu';
import ServiceCard from '../card/ServiceCard';

const ServiceSection = () => {
  return (
    <section className="container overflow-hidden bg-pd-primary">
      <h2 className="text-center text-heading-4 font-bold">Layanan</h2>
      <div className="mt-9 space-y-[100px]">
        {SERVICE_DATA.map((item) => (
          <ServiceCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
