import AdminLayout from '~/shared/container/admin-layout/AdminLayout';
import DashboardKTPContainer from './container/DashboardKTPContainer';
import { getAllKTPRequest } from '~/shared/actions/KTPService';

export const dynamic = 'force-dynamic';

const page = async () => {
  const { data, error, isLoading } = await getAllKTPRequest();

  return (
    <AdminLayout>
      <DashboardKTPContainer data={data} error={error} isLoading={isLoading} />
    </AdminLayout>
  );
};

export default page;
