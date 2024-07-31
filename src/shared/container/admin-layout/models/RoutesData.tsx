import { DashboardIcon } from '../../icon/DashboardIcon';
import { type ItemsDataI } from './type';
import DashboardContainer from '~/app/(admin)/dashboard/container/DashboardContainer';

export const ADMIN_ROUTES: ItemsDataI[] = [
  {
    label: (
      <div className="text-ny-gray-300 text-caption-1 font-[400]">
        Dashboard
      </div>
    ),
    key: '/dashboard',
    path: 'dashboard',
    icon: <DashboardIcon />,
    components: <DashboardContainer />,
    show: true,
  },
  {
    label: (
      <div className="text-ny-gray-300 text-caption-1 font-[400]">KTP</div>
    ),
    key: '/dashboard/ktp',
    path: 'dashboard-ktp',
    icon: <DashboardIcon />,
    components: <DashboardContainer />,
    show: true,
  },
  {
    label: <div className="text-ny-gray-300 text-caption-1 font-[400]">KK</div>,
    key: '/dashboard/kk',
    path: 'dashboard-kk',
    icon: <DashboardIcon />,
    components: <DashboardContainer />,
    show: true,
  },
  {
    label: (
      <div className="text-ny-gray-300 text-caption-1 font-[400]">
        Akta Kelahiran
      </div>
    ),
    key: '/dashboard/akta-lahir',
    path: 'dashboard-akta-lahir',
    icon: <DashboardIcon />,
    components: <DashboardContainer />,
    show: true,
  },
  {
    label: (
      <div className="text-ny-gray-300 text-caption-1 font-[400]">
        Akta kematian
      </div>
    ),
    key: '/dashboard/akta-mati',
    path: 'dashboard-akta-mati',
    icon: <DashboardIcon />,
    components: <DashboardContainer />,
    show: true,
  },
];
