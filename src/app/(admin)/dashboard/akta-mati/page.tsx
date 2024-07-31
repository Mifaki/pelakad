import AdminLayout from '~/shared/container/admin-layout/AdminLayout';
import { getAllBirthCertificateRequests } from '~/shared/actions/BirthCertificateService';
import DashboardDeathCertificateContainer from './container/DashboardDeathCertificateContainer';
import { getAllDeathCertificateRequests } from '~/shared/actions/DeathCertificateService';

export const dynamic = 'force-dynamic';

const page = async () => {
  const { data, error, isLoading } = await getAllDeathCertificateRequests();
  return (
    <AdminLayout>
      <DashboardDeathCertificateContainer
        data={data}
        error={error}
        isLoading={isLoading}
      />
    </AdminLayout>
  );
};

export default page;
