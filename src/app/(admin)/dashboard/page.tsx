import AdminLayout from '~/shared/container/admin-layout/AdminLayout';
import DashboardContainer from './container/DashboardContainer';
import { getDashboardStatistics } from '~/shared/actions/DashboardService';

export const dynamic = 'force-dynamic';

const Dashboard = async () => {
  const { data, error, isLoading } = await getDashboardStatistics();

  return (
    <AdminLayout>
      <DashboardContainer data={data} error={error} isLoading={isLoading} />
    </AdminLayout>
  );
};

export default Dashboard;
