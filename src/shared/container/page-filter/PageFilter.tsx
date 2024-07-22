import { type FormInstance, Input } from 'antd';
import FilterPopover from '../filter-popover/FilterPopover';

interface IPageFilter {
  onApplyFilter: any;
  onClearFilter: any;
  form: FormInstance<any>;
  filterComponents: React.ReactNode;
  buttonComponents?: React.ReactNode;
}
const PageFilter = ({
  onApplyFilter,
  onClearFilter,
  form,
  filterComponents,
  buttonComponents,
}: IPageFilter) => {
  return (
    <div className="flex items-center justify-end gap-[10px]">
      <div className="flex gap-[8px]">
        <FilterPopover
          onClearFilter={onClearFilter}
          form={form}
          popoverComponents={filterComponents}
          onApplyFilter={onApplyFilter}
        />

        <div>{buttonComponents}</div>
      </div>
    </div>
  );
};

export default PageFilter;
