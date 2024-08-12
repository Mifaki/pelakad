import AdminLayout from '~/shared/container/admin-layout/AdminLayout';
import DashboardFamilyCardContainer from './container/DashboardFamilyCardContainer';
import { getAllFamilyCardRequests } from '~/shared/actions/FamilyCardService';
import { type TRequestStatus } from '~/shared/models/generalInterfaces';

export const dynamic = 'force-dynamic';

const Page = async ({
  searchParams,
}: {
  searchParams: { status?: TRequestStatus };
}) => {
  const status = searchParams.status;
  const { data, error, isLoading } = await getAllFamilyCardRequests(status);

  return (
    <AdminLayout>
      <DashboardFamilyCardContainer
        data={data}
        error={error}
        isLoading={isLoading}
        initialStatus={status}
      />
    </AdminLayout>
  );
};

export default Page;
