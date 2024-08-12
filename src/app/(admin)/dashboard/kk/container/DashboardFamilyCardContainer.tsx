'use client';

import { Form, Select } from 'antd';
import { type IGeneralAPIResponse } from '~/shared/models/generalInterfaces';
import { type IRootFamilyCardRequest } from '~/shared/models/familycardinterfaces';
import { useForm } from 'antd/es/form/Form';
import { useRouter, useSearchParams } from 'next/navigation';
import DashboardTable from '~/shared/container/dashboard-table/DashboardTable';
import PageFilter from '~/shared/container/page-filter/PageFilter';
import PageTitle from '~/shared/container/page-title/PageTitle';
import useGenerateFamilyCardColumn from '../usecase/useGenerateColumn';

const DashboardFamilyCardContainer = ({
  data,
  error,
  isLoading,
  initialStatus,
}: IGeneralAPIResponse<IRootFamilyCardRequest[]> & {
  initialStatus?: string;
}) => {
  const [form] = useForm();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { columns } = useGenerateFamilyCardColumn();

  const handleFilter = (values: { status: string }) => {
    const params = new URLSearchParams(searchParams);
    if (values.status && values.status !== 'default') {
      params.set('status', values.status);
    } else {
      params.delete('status');
    }
    router.push(`?${params.toString()}`);
  };

  const clearFilter = () => {
    form.setFieldsValue({ status: 'default' });
    router.push('/dashboard/kk');
  };

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
            onApplyFilter={handleFilter}
            onClearFilter={clearFilter}
            filterComponents={
              <>
                <Form.Item
                  name="status"
                  initialValue={initialStatus ?? 'default'}
                  className="my-[10px]"
                >
                  <Select
                    className="h-[35px]"
                    options={[
                      { value: 'default', label: 'All' },
                      { value: 'menunggu', label: 'Menunggu' },
                      { value: 'dikembalikan', label: 'Dikembalikan' },
                      { value: 'diproses', label: 'Diproses' },
                      { value: 'tanda-tangan', label: 'Tanda Tangan' },
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
