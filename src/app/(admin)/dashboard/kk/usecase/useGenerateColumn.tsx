import { Button, type TableProps, Tag } from 'antd';
import { useRouter } from 'next/navigation';

const useGenerateFamilyCardColumn = () => {
  const router = useRouter();
  const columns: TableProps['columns'] = [
    {
      title: 'Name',
      dataIndex: 'full_name',
      key: 'full_name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Jenis Permintaan',
      dataIndex: 'reason',
      key: 'reason',
      render: (text: string) => <p className="capitalize">{text}</p>,
    },
    {
      title: 'No. NIK',
      dataIndex: 'nik_id',
      key: 'nik_id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'NO. KK',
      dataIndex: 'kk_id',
      key: 'kk_id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'No Handphone',
      dataIndex: 'phone_number',
      key: 'phone_number',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Status',
      dataIndex: 'request_status',
      key: 'request_status',
      render: (text: string) => (
        <Tag
          className="capitalize"
          color={
            text === 'selesai'
              ? 'green'
              : text === 'menunggu'
                ? 'purple'
                : text === 'dikembalikan'
                  ? 'red'
                  : 'orange'
          }
        >
          {text}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      dataIndex: '',
      key: 'actions',
      render: ({ id }) => (
        <Button
          className="bg-ny-primary-100 text-ny-primary-500 hover:!bg-ny-primary-100 hover:!text-ny-primary-500 text-caption-1"
          onClick={() => router.push(`/dashboard/kk/` + id)}
        >
          Detail
        </Button>
      ),
    },
  ];

  return { columns };
};

export default useGenerateFamilyCardColumn;
