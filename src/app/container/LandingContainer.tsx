import Footer from '~/shared/container/Footer/Footer';
import FormFlowSection from './section/FormFlowSection';
import HeroSection from './section/HeroSection';
import ServiceSection from './section/ServiceSection';
import TopNavbar from '~/shared/container/navigation/TopNavbar';

const LandingContainer = () => {
  return (
    <>
      <TopNavbar />
      <HeroSection id="beranda" />
      <ServiceSection id="layanan" />
      <FormFlowSection id="alur" />
      <Footer id="kontak" />
    </>
  );
};

export default LandingContainer;
