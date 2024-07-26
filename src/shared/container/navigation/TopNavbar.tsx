import { Button } from 'antd';
import { HamburgerIcon } from '../icon/HamburgerIcon';

const TopNavbar = () => {
  return (
    <nav className="container flex h-[70px] w-full max-w-[100vw] items-center justify-between bg-pd-primary-bold">
      <Button type="text" icon={<HamburgerIcon />} />
      <h1 className="text-center text-body-1 font-bold text-white">PELAKAD</h1>
      <div className="size-10 bg-transparent" />
    </nav>
  );
};

export default TopNavbar;
