import AdminLayout from '~/shared/container/admin-layout/AdminLayout';
import DashboardDeathCertificateContainer from './container/DashboardDeathCertificateContainer';
import { getAllDeathCertificateRequests } from '~/shared/actions/DeathCertificateService';
import { type TRequestStatus } from '~/shared/models/generalInterfaces';

export const dynamic = 'force-dynamic';

const Page = async ({
  searchParams,
}: {
  searchParams: { status?: TRequestStatus };
}) => {
  const status = searchParams.status;
  const { data, error, isLoading } =
    await getAllDeathCertificateRequests(status);
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

export default Page;
