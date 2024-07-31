'use client';

import { useForm } from 'antd/es/form/Form';
import PageTitle from '~/shared/container/page-title/PageTitle';
import { type IRootDeathCertificate } from '~/shared/models/aktamatiinterfaces';
import { type IGeneralAPIResponse } from '~/shared/models/generalInterfaces';
import useGenerateDeathCertificateColumn from '../usecase/useGenerateColumn';
import DashboardTable from '~/shared/container/dashboard-table/DashboardTable';
import PageFilter from '~/shared/container/page-filter/PageFilter';
import { Form, Select } from 'antd';

const DashboardDeathCertificateContainer = ({
  data,
  error,
  isLoading,
}: IGeneralAPIResponse<IRootDeathCertificate[]>) => {
  const [form] = useForm();

  const { columns } = useGenerateDeathCertificateColumn();

  return (
    <div>
      <PageTitle title="Akta Kematian" />
      <DashboardTable<IRootDeathCertificate>
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

export default DashboardDeathCertificateContainer;
