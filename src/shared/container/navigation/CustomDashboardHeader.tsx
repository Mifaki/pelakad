import { UserButton } from '@clerk/nextjs';
import { Header } from 'antd/es/layout/layout';

const CustomDashboardHeader = () => {
  return (
    <div className="h-[149px] border-b-[1px] border-gray-200">
      <Header className="relative flex h-full items-center justify-end bg-white lg:justify-end">
        <UserButton />
      </Header>
    </div>
  );
};

export default CustomDashboardHeader;
