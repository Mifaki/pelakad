import AdminLayout from '~/shared/container/admin-layout/AdminLayout';
import DashboardBirthCertificateContainer from './container/DashboardBirthCertificateContainer';
import { getAllBirthCertificateRequests } from '~/shared/actions/BirthCertificateService';
import { type TRequestStatus } from '~/shared/models/generalInterfaces';

export const dynamic = 'force-dynamic';

const Page = async ({
  searchParams,
}: {
  searchParams: { status?: TRequestStatus };
}) => {
  const status = searchParams.status;
  const { data, error, isLoading } =
    await getAllBirthCertificateRequests(status);

  return (
    <AdminLayout>
      <DashboardBirthCertificateContainer
        data={data}
        error={error}
        isLoading={isLoading}
        initialStatus={status}
      />
    </AdminLayout>
  );
};

export default Page;
