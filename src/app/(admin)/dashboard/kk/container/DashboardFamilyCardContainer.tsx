'use client';

import DashboardTable from '~/shared/container/dashboard-table/DashboardTable';
import PageTitle from '~/shared/container/page-title/PageTitle';
import { type IRootFamilyCardRequest } from '~/shared/models/familycardinterfaces';
import { type IGeneralAPIResponse } from '~/shared/models/generalInterfaces';
import useGenerateFamilyCardColumn from '../usecase/useGenerateColumn';
import PageFilter from '~/shared/container/page-filter/PageFilter';
import { useForm } from 'antd/es/form/Form';
import { Form, Select } from 'antd';

const DashboardFamilyCardContainer = ({
  data,
  error,
  isLoading,
}: IGeneralAPIResponse<IRootFamilyCardRequest[]>) => {
  const [form] = useForm();

  const { columns } = useGenerateFamilyCardColumn();

  return (
    <div>
      <PageTitle title="Kartu Keluarga" />
      <DashboardTable<IRootFamilyCardRequest>
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

export default DashboardFamilyCardContainer;
