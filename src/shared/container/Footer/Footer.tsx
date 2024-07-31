import Image from 'next/image';
import ButtonFooter from '../Button/ButtonFooter';

import { InstagramIcon } from '../icon/InstagramIcon';
import { FacebookIcon } from '../icon/FacebookIcon';
import { TikTokIcon } from '../icon/TiktokIcon';

const Footer = ({ id }: { id?: string }) => {
  return (
    <footer className="bg-indigo-900 py-8 text-white">
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex w-1/3 justify-center md:justify-start md:pl-10">
              <Image
                src="https://utfs.io/f/e732e743-895e-4e0c-a29a-eaddb83f7ca1-p9i1t8.png"
                alt="DAWUHAN MMD FILKOM UB - 40"
                width={150}
                height={150}
                objectFit="contain"
              />
            </div>

            {/* Balai Desa */}
            <div className="w-1/3 text-center">
              <h6 className="mb-2 font-bold">Balai Desa Dawuhan</h6>
              <p className="mb-2 text-center text-sm">
                WQ88+WXP, Lesti, Dawuhan, Kec. Poncokusumo, Kabupaten Malang,
                Jawa Timur 65157
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

            {/* MMD FILKOM UB */}
            <div className="w-1/3 text-right">
              <h6 className="mb-2 text-center font-bold">
                MMD FILKOM UB 2024 Kelompok 40
              </h6>
              <p className="mb-2 text-center text-sm leading-tight">
                Tim mahasiswa Fakultas Ilmu Komputer UB yang menerapkan solusi
                teknologi informasi untuk pembangunan desa.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <ButtonFooter
                  icon={<InstagramIcon />}
                  redirect_url="https://www.instagram.com/mmd_filkom_40_dawuhan/"
                />
                <ButtonFooter
                  icon={<TikTokIcon />}
                  redirect_url="https://www.tiktok.com/@mmd.40.filkom"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="space-y-4 md:hidden md:w-1/3">
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="mb-4 flex items-center">
              <Image
                src="https://utfs.io/f/38428230-6b1b-42f1-ad13-5128391f40c2-okd8nb.png"
                alt="DAWUHAN MMD FILKOM UB - 40"
                width={30}
                height={30}
                objectFit="contain"
              />
              <h6 className="text-center text-heading-6 font-bold">
                MMD FILKOM UB 2024 Kelompok 40
              </h6>
            </div>

            {/* Tim mahasiswa description */}
            <p className="mb-6 text-center text-sm">
              Tim mahasiswa Fakultas Ilmu Komputer UB yang menerapkan solusi
              teknologi informasi untuk pembangunan desa.
            </p>

            {/* Social Media Icons for MMD */}
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

            {/* Balai Desa */}
            <div className="mb-6 text-center">
              <h6 className="mb-2 mt-6 text-lg font-bold">Balai Desa</h6>
              <p className="mb-4 text-sm">
                WQ88+WXP, Lesti, Dawuhan, Kec. Poncokusumo, Kabupaten Malang,
                Jawa Timur 65157
              </p>
            </div>

            {/* Social Media Icons */}
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
        </div>

        {/* Divider Line */}
        <div className="my-6 h-px bg-white" />

        {/* Copyright */}
        <div className="text-center text-sm">
          Made with ❤️ by MMD 2024 Fakultas Ilmu Komputer Universitas Brawijaya
          - 40
        </div>
      </div>
    </footer>
  );
};

export default Footer;
