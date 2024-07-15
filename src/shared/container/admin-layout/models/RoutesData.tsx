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
    key: '/dashboard/ktp',
    path: 'dashboard-ktp',
    icon: <DashboardIcon />,
    components: <DashboardContainer />,
    show: true,
  },
  {
    label: (
      <div className="text-ny-gray-300 text-caption-1 font-[400]">
        Akte Kelahiran
      </div>
    ),
    key: '/dashboard/ktp',
    path: 'dashboard-ktp',
    icon: <DashboardIcon />,
    components: <DashboardContainer />,
    show: true,
  },
  {
    label: (
      <div className="text-ny-gray-300 text-caption-1 font-[400]">
        Akte kematian
      </div>
    ),
    key: '/dashboard/ktp',
    path: 'dashboard-ktp',
    icon: <DashboardIcon />,
    components: <DashboardContainer />,
    show: true,
  },
];
