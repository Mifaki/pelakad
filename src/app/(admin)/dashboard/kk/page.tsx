import AdminLayout from '~/shared/container/admin-layout/AdminLayout';
import DashboardFamilyCardContainer from './container/DashboardFamilyCardContainer';
import { getAllFamilyCardRequests } from '~/shared/actions/FamilyCardService';

export const dynamic = 'force-dynamic';

const page = async () => {
  const { data, error, isLoading } = await getAllFamilyCardRequests();

  return (
    <AdminLayout>
      <DashboardFamilyCardContainer
        data={data}
        error={error}
        isLoading={isLoading}
      />
    </AdminLayout>
  );
};

export default page;
