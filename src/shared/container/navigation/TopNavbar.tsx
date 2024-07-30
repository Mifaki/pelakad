'use client';

import { Button, Drawer } from 'antd';
import { HamburgerIcon } from '../icon/HamburgerIcon';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const TopNavbar = () => {
  const router = useRouter();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId !== 'kontak') {
      router.push('/');
    }
    setDrawerVisible(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const sectionId = href.substr(1);
      scrollToSection(sectionId);
    }
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <nav className="container flex h-[70px] w-full max-w-[100vw] items-center justify-between bg-pd-primary-bold md:hidden">
        <Button type="text" icon={<HamburgerIcon />} onClick={showDrawer} />
        <h1 className="text-center text-body-1 font-bold text-white">
          PELAKAD
        </h1>
        <div className="size-10 bg-transparent" />
      </nav>
      <nav className="container hidden h-[80px] w-full max-w-[100vw] items-center justify-between bg-pd-primary-bold md:flex">
        <Link href={'/'}>
          <img
            src="https://utfs.io/f/aed70121-0eb6-40f1-831a-ce7f3715652c-4wc0t1.png"
            alt="Pelekad Logo"
            className="h-8"
          />
        </Link>
        <div className="flex items-center gap-[80px]">
          <a
            href="#beranda"
            className="cursor-pointer text-body-1 text-white"
            onClick={handleClick}
          >
            Beranda
          </a>
          <a
            href="#layanan"
            className="cursor-pointer text-body-1 text-white"
            onClick={handleClick}
          >
            Layanan
          </a>
          <a
            href="#alur"
            className="cursor-pointer text-body-1 text-white"
            onClick={handleClick}
          >
            Alur
          </a>
          <a
            href="#kontak"
            className="cursor-pointer text-body-1 text-white"
            onClick={handleClick}
          >
            Kontak
          </a>
        </div>
      </nav>
      <Drawer
        title="Menu"
        placement="left"
        onClose={onCloseDrawer}
        open={drawerVisible}
      >
        <>
          <a
            href="#beranda"
            className="mb-8 block cursor-pointer text-body-1 font-medium"
            onClick={handleClick}
          >
            Beranda
          </a>
          <a
            href="#layanan"
            className="cursor-pointe my-8 block text-body-1 font-medium"
            onClick={handleClick}
          >
            Layanan
          </a>
          <a
            href="#alur"
            className="my-8 block cursor-pointer text-body-1 font-medium"
            onClick={handleClick}
          >
            Alur
          </a>
          <a
            href="#kontak"
            className="my-8 block cursor-pointer text-body-1 font-medium"
            onClick={handleClick}
          >
            Kontak
          </a>
        </>
      </Drawer>
    </>
  );
};

export default TopNavbar;
