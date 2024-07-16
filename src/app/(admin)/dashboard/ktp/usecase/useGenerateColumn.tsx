import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Row, Space, type TableProps, Tag } from 'antd';

const useGenerateColumnAdminUser = () => {
  const columns: TableProps['columns'] = [
    {
      title: 'Name',
      dataIndex: 'full_name',
      key: 'full_name',
      render: (text) => <a>{text}</a>,
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
                ? 'orange'
                : 'red'
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
      render: ({ id, status }) => (
        <Row gutter={[12, 12]}>
          <Dropdown
            menu={{
              items: [
                {
                  label: 'Edit',
                  key: '1',
                },
                {
                  label: 'View Detail',
                  key: '2',
                },
              ],
            }}
          >
            <Button className="bg-ny-primary-100 text-ny-primary-500 hover:!bg-ny-primary-100 hover:!text-ny-primary-500 text-caption-1">
              <Space>
                Actions
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Row>
      ),
    },
  ];

  return { columns };
};

export default useGenerateColumnAdminUser;
