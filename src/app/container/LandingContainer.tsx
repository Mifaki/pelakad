import Footer from '~/shared/container/Footer/Footer';
import FormFlowSection from './section/FormFlowSection';
import HeroSection from './section/HeroSection';
import ServiceSection from './section/ServiceSection';
import TopNavbar from '~/shared/container/navigation/TopNavbar';
import KtpContainer from '~/app/KTP/container/KtpContainer';

const LandingContainer = () => {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <ServiceSection />
      <FormFlowSection />
      <KtpContainer />
      <Footer />
    </>
  );
};

export default LandingContainer;
