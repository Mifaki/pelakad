import AdminLayout from '~/shared/container/admin-layout/AdminLayout';
import DashboardBirthCertificateContainer from './container/DashboardBirthCertificateContainer';
import { getAllBirthCertificateRequests } from '~/shared/actions/BirthCertificateService';

export const dynamic = 'force-dynamic';

const page = async () => {
  const { data, error, isLoading } = await getAllBirthCertificateRequests();

  return (
    <AdminLayout>
      <DashboardBirthCertificateContainer
        data={data}
        error={error}
        isLoading={isLoading}
      />
    </AdminLayout>
  );
};

export default page;
