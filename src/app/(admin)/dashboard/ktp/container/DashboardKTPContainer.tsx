'use client';

import DashboardTable from '~/shared/container/dashboard-table/DashboardTable';
import PageTitle from '~/shared/container/page-title/PageTitle';
import useGenerateColumnAdminUser from '../usecase/useGenerateColumn';
import { Form, Select } from 'antd';
import PageFilter from '~/shared/container/page-filter/PageFilter';
import { useForm } from 'antd/es/form/Form';
import { type IGeneralAPIResponse } from '~/shared/models/generalInterfaces';
import { type IRootKTP } from '~/shared/models/ktpinterfaces';

const DashboardKTPContainer = ({
  data,
  error,
  isLoading,
}: IGeneralAPIResponse<IRootKTP[]>) => {
  const [form] = useForm();

  const { columns } = useGenerateColumnAdminUser();

  return (
    <div>
      <PageTitle title="Kartu Tanda Penduduk" />
      <DashboardTable<IRootKTP>
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

export default DashboardKTPContainer;
