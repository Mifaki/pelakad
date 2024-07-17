import { Table } from 'antd';
import { type ColumnsType } from 'antd/es/table';
import { type ReactNode } from 'react';

interface IDashboardTable {
  columns: ColumnsType<any>;
  loading?: boolean;
  filterComponents: ReactNode;
}

interface DashboardTableProps<T> extends IDashboardTable {
  data?: T[];
}

const DashboardTable = <T extends object>({
  columns,
  data,
  loading,
  filterComponents,
}: DashboardTableProps<T>) => {
  return (
    <div>
      <div className="mb-[20px]">{filterComponents}</div>
      <div>
        <Table
          scroll={{ x: 'max-content' }}
          loading={loading}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
};

export default DashboardTable;
