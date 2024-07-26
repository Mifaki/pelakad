import { getBirthCertificateRequestById } from '~/shared/actions/BirthCertificateService';
import BirthCertificateRequestDetailContainer from './container/BirthCertificateRequestDetailContainer';
import AdminLayout from '~/shared/container/admin-layout/AdminLayout';

const DetailBirthCertificate = async ({
  params,
}: {
  params: { birthCertificateRequestId: string };
}) => {
  const { data, isLoading, error } = await getBirthCertificateRequestById(
    params.birthCertificateRequestId,
  );

  return (
    <AdminLayout>
      <BirthCertificateRequestDetailContainer
        data={data}
        isLoading={isLoading}
        id={params.birthCertificateRequestId}
      />
    </AdminLayout>
  );
};

export default DetailBirthCertificate;
