import { BirthCertificateIcon } from '../../icon/BirthCertificateIcon';
import { DashboardIcon } from '../../icon/DashboardIcon';
import { DeathCertificateIcon } from '../../icon/DeathCertificateIcon';
import { KkIcon } from '../../icon/KkIcon';
import { KTPIcon } from '../../icon/KTPIcon';
import { type ItemsDataI } from './type';

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
    show: true,
  },
  {
    label: (
      <div className="text-ny-gray-300 text-caption-1 font-[400]">KTP</div>
    ),
    key: '/dashboard/ktp',
    path: 'dashboard-ktp',
    icon: <KTPIcon />,
    show: true,
  },
  {
    label: <div className="text-ny-gray-300 text-caption-1 font-[400]">KK</div>,
    key: '/dashboard/kk',
    path: 'dashboard-kk',
    icon: <KkIcon />,
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
    icon: <BirthCertificateIcon />,
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
    icon: <DeathCertificateIcon />,
    show: true,
  },
];
