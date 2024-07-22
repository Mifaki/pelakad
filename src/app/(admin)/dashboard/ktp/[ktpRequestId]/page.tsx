import AdminLayout from '~/shared/container/admin-layout/AdminLayout';
import KTPRequestDetailContainer from './container/KTPRequestDetailContainer';
import { getKTPRequestById } from '~/shared/actions/KTPService';

const KTPRequestDetail = async ({
  params,
}: {
  params: { ktpRequestId: string };
}) => {
  const { data, isLoading, error } = await getKTPRequestById(
    params.ktpRequestId,
  );

  return (
    <AdminLayout>
      <KTPRequestDetailContainer
        data={data}
        isLoading={isLoading}
        id={params.ktpRequestId}
      />
    </AdminLayout>
  );
};

export default KTPRequestDetail;
