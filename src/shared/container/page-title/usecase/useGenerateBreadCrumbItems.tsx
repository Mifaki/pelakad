'use client';

import { usePathname } from 'next/navigation';
import { HomeOutlined } from '@ant-design/icons';
import { type ItemType } from 'antd/es/breadcrumb/Breadcrumb';

const useGenerateBreadcrumbItems = (): ItemType[] => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  const breadcrumbItems: ItemType[] = [
    {
      href: '/dashboard',
      title: <HomeOutlined />,
    },
  ];

  let currentPath = '';

  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    let title = segment.charAt(0).toUpperCase() + segment.slice(1);

    switch (segment) {
      case 'ktp':
        title = 'Kartu Tanda Penduduk';
        break;
      case 'kk':
        title = 'Kartu Keluarga';
        break;
      case 'akta-mati':
        title = 'Akta Kematian';
        break;
      case 'akta-lahir':
        title = 'Akta Kelahiran';
        break;
      case 'dashboard':
        return;
    }

    breadcrumbItems.push({
      href: currentPath,
      title: title,
    });
  });

  return breadcrumbItems;
};

export default useGenerateBreadcrumbItems;
