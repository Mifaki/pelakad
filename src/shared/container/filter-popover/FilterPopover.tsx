import { Button, Divider, Form, type FormInstance, Popover } from 'antd';
import { FilterFilled } from '@ant-design/icons';

interface IFilterPopover {
  form: FormInstance<any>;
  popoverComponents: React.ReactNode;
  onApplyFilter: any;
  onClearFilter: any;
}
const FilterPopover = ({
  form,
  popoverComponents,
  onApplyFilter,
  onClearFilter,
}: IFilterPopover) => {
  const content = (
    <div className="min-w-[224px]">
      <Form layout="vertical" form={form} onFinish={onApplyFilter}>
        {popoverComponents}
        <Divider className="my-[8px]" />
        <div className="my-0 flex justify-end gap-[5px]">
          <Button
            onClick={onClearFilter}
            className="h-[35px] rounded-[8px] text-caption-1"
          >
            Reset
          </Button>
          <Button htmlType="submit" className="rounded-[8px] text-caption-1">
            Apply
          </Button>
        </div>
      </Form>
    </div>
  );

  return (
    <div>
      <Popover
        content={content}
        title="Filter"
        trigger="click"
        placement="bottomRight"
      >
        <Button className="border-ny-gray-100 flex h-[40px] min-w-max items-center justify-center gap-[8px] rounded-[8px] border-[1px] bg-white text-black hover:bg-white hover:text-black md:min-w-[90px]">
          <FilterFilled />
          <div className="hidden lg:block">Filter</div>
        </Button>
      </Popover>
    </div>
  );
};

export default FilterPopover;
