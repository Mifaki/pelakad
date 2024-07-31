import { type MenuProps } from 'antd';

//type
export type MenuItem = Required<MenuProps>['items'][number];

// interface
export interface ItemsDataI {
  label: string | React.ReactNode;
  key: string;
  icon: any;
  show: boolean;
  path: string;
}
