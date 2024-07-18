import Footer from '~/shared/container/Footer/Footer';
import KtpContainer from '~/app/KTP/container/KtpContainer';
import TopNavbar from '~/shared/container/navigation/TopNavbar';

const LandingContainer = () => {
  return (
    <>
      <TopNavbar />
      <KtpContainer />
      <Footer />
    </>
  );
};

export default LandingContainer;
