import AdminLayout from '~/shared/container/admin-layout/AdminLayout';
import { getAllBirthCertificateRequests } from '~/shared/actions/BirthCertificateService';
import DashboardDeathCertificateContainer from './container/DashboardDeathCertificateContainer';

export const dynamic = 'force-dynamic';

const page = async () => {
  return (
    <AdminLayout>
      <DashboardDeathCertificateContainer />
    </AdminLayout>
  );
};

export default page;
