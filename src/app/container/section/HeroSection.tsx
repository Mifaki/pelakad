import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="mt-20 flex min-h-[calc(100vh-150px)] w-full flex-col items-center justify-between">
      <div className="container relative flex h-[calc(80vh-150px)] max-w-[100vw] flex-col items-center md:flex-row">
        <h1 className="mb-10 text-center text-heading-3 font-bold leading-[45px] sm:text-heading-2 md:text-left md:text-heading-1 md:leading-[60px]">
          Selamat Datang di{' '}
          <span className="text-pd-accent">Pengajuan Layanan </span> Masyarkat
          Dawuhan
        </h1>
        <div className="relative h-[340px] w-full md:h-[420px] lg:h-[500px]">
          <Image
            src={
              'https://utfs.io/f/ad0e56c8-c224-42d9-9f6b-741d6d242094-18d5vt.png'
            }
            alt="Hero Model"
            layout="fill"
            objectFit="contain"
            className="aspect-auto"
          />
        </div>
        <div className="absolute right-10 top-5 -z-10 h-[280px] w-[240px] rounded-full bg-[#208B71] opacity-30 mix-blend-multiply blur-2xl filter" />
        <div className="absolute bottom-5 left-10 -z-10 size-[240px] rounded-full bg-[#BE0575] opacity-30 mix-blend-multiply blur-2xl filter" />
      </div>
      <div className="block h-[10vh] w-full rounded-t-full bg-pd-primary md:hidden" />
    </section>
  );
};

export default HeroSection;
