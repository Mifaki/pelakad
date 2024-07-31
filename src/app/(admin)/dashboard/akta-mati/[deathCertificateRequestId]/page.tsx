import AdminLayout from '~/shared/container/admin-layout/AdminLayout';
import DeathCertificateRequestDetailContainer from './container/DeathCertificateRequestDetailContainer';
import { getDeathCertificateRequestById } from '~/shared/actions/DeathCertificateService';

const DetailBirthCertificate = async ({
  params,
}: {
  params: { deathCertificateRequestId: string };
}) => {
  const { data, isLoading, error } = await getDeathCertificateRequestById(
    params.deathCertificateRequestId,
  );

  return (
    <AdminLayout>
      <DeathCertificateRequestDetailContainer
        data={data}
        isLoading={isLoading}
        id={params.deathCertificateRequestId}
      />
    </AdminLayout>
  );
};

export default DetailBirthCertificate;
