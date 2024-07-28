import { getBirthCertificateRequestById } from '~/shared/actions/BirthCertificateService';
import AdminLayout from '~/shared/container/admin-layout/AdminLayout';
import FamilyCardRequestDetailContainer from './container/FamilyCardRequestDetailContainer';
import { getFamilyCardRequestById } from '~/shared/actions/FamilyCardService';

const DetailBirthCertificate = async ({
  params,
}: {
  params: { familyCardRequestId: string };
}) => {
  const { data, isLoading, error } = await getFamilyCardRequestById(
    params.familyCardRequestId,
  );

  return (
    <AdminLayout>
      <FamilyCardRequestDetailContainer
        data={data}
        isLoading={isLoading}
        id={params.familyCardRequestId}
      />
    </AdminLayout>
  );
};

export default DetailBirthCertificate;
