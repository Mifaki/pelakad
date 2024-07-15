import ButtonFooter from '../Button/ButtonFooter';
import { FacebookIcon } from '../icon/FacebookIcon';
import { InstagramIcon } from '../icon/InstagramIcon';

const Footer = () => {
  return (
    <footer className="container flex w-full flex-col items-center justify-center gap-8 bg-pd-primary-bold py-5 text-center text-white">
      <div className="space-y-4">
        <h6 className="text-heading-6 font-bold">Dawuhan</h6>
        <p className="text-caption-1">
          Desa Dawuhan, merupakan salah satu desa yang berada di kawasan
          agropolitan kecamatan Poncokusumo.
        </p>
      </div>
      <div className="space-y-4">
        <h6 className="text-heading-6 font-bold">Balai Desa</h6>
        <p className="text-caption-1">
          WQ88+WXP, Lesti, Dawuhan, Kec. Poncokusumo, Kabupaten Malang, Jawa
          Timur 65157
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <ButtonFooter
            icon={<InstagramIcon />}
            redirect_url="https://www.instagram.com/dawuhan.poncokusumo/"
          />
          <ButtonFooter
            icon={<FacebookIcon />}
            redirect_url="https://www.facebook.com/dawuhan.poncokusumo/"
          />
        </div>
      </div>
      <div className="space-y-4">
        <div className="h-[1px] w-full bg-white" />
        <p>Made with 🧡️ by KKN FILKOM UB 40</p>
      </div>
    </footer>
  );
};

export default Footer;
