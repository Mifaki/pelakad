'use client';

import { Layout, Menu, theme } from 'antd';
import Image from 'next/image';
import LOGO from 'public/assets/logo-dawuhan.png';
import CustomDashboardHeader from '../navigation/CustomDashboardHeader';
import { useRouter } from 'next/navigation';
import { ADMIN_ROUTES } from './models/RoutesData';

interface IAdminLayout {
  children: React.ReactNode;
}

const { Footer, Sider, Content } = Layout;

const AdminLayout = ({ children }: IAdminLayout) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();

  return (
    <Layout
      style={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Sider
        theme="light"
        className="border-ny-gray-200 hidden h-screen !max-w-fit border-r-[1px] lg:block"
        collapsed={false}
      >
        <div className="border-ny-gray-200 flex justify-center border-b-[1px] p-[16px]">
          <div className="relative size-[80px]">
            <Image src={LOGO} alt="Logo" fill />
          </div>
        </div>
        <Menu
          className="mt-[16px] px-[16px]"
          theme="light"
          defaultSelectedKeys={['/']}
          mode="inline"
          items={ADMIN_ROUTES}
          onClick={({ key }) => router.push(key)}
        />
      </Sider>
      <Layout>
        <CustomDashboardHeader />
        <Content style={{ overflow: 'auto' }}>
          <div
            className="lg:[30px] p-[15px]"
            style={{
              minHeight: '100vh',
              backgroundColor: 'white',
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', background: colorBgContainer }}>
          Pelakad Dashboard
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
