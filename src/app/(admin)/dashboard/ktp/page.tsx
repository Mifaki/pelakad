import AdminLayout from '~/shared/container/admin-layout/AdminLayout';
import DashboardKTPContainer from './container/DashboardKTPContainer';
import { getAllKTPRequest } from '~/shared/actions/KTPService';
import { type TRequestStatus } from '~/shared/models/generalInterfaces';

export const dynamic = 'force-dynamic';

const Page = async ({
  searchParams,
}: {
  searchParams: { status?: TRequestStatus };
}) => {
  const status = searchParams.status;
  const { data, error, isLoading } = await getAllKTPRequest(status);

  return (
    <AdminLayout>
      <DashboardKTPContainer
        data={data}
        error={error}
        isLoading={isLoading}
        initialStatus={status}
      />
    </AdminLayout>
  );
};

export default Page;
