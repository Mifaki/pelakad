import { type MenuProps } from 'antd';

//type
export type MenuItem = Required<MenuProps>['items'][number];

// interface
export interface ItemsDataI {
  label: string | React.ReactNode;
  key: string;
  icon: any;
  components: React.ReactNode;
  show: boolean;
  path: string;
}
