'use client';

import { Form, Select } from 'antd';
import { type IGeneralAPIResponse } from '~/shared/models/generalInterfaces';
import { type IRootBirthCertificate } from '~/shared/models/aktalahirinterfaces';
import { useForm } from 'antd/es/form/Form';
import DashboardTable from '~/shared/container/dashboard-table/DashboardTable';
import PageFilter from '~/shared/container/page-filter/PageFilter';
import PageTitle from '~/shared/container/page-title/PageTitle';
import useGenerateBirthCertificateColumn from '../usecase/useGenerateColumn';

const DashboardBirthCertificateContainer = ({
  data,
  error,
  isLoading,
}: IGeneralAPIResponse<IRootBirthCertificate[]>) => {
  const [form] = useForm();

  const { columns } = useGenerateBirthCertificateColumn();

  return (
    <div>
      <PageTitle title="Akta Kelahiran" />
      <DashboardTable<IRootBirthCertificate>
        data={data ? data : []}
        columns={columns}
        loading={isLoading}
        filterComponents={
          <PageFilter
            form={form}
            onApplyFilter={() => console.log('Filter')}
            onClearFilter={() => console.log('Filter')}
            filterComponents={
              <>
                <Form.Item
                  name={'status'}
                  initialValue={'default'}
                  className="my-[10px]"
                >
                  <Select
                    className="h-[35px]"
                    options={[
                      { value: 'default', label: 'All' },
                      { value: 'menunggu', label: 'Menunggu' },
                      { value: 'dikembalikan', label: 'Dikembalikan' },
                      { value: 'selesai', label: 'Selesai' },
                    ]}
                  />
                </Form.Item>
              </>
            }
          />
        }
      />
    </div>
  );
};

export default DashboardBirthCertificateContainer;
