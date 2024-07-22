'use client';

import { useRouter } from 'next/navigation';
import { ArrowBackIcon } from '../icon/ArrowBackIcon';
import { Breadcrumb } from 'antd';
import useGenerateBreadcrumbItems from './usecase/useGenerateBreadCrumbItems';

interface IPageTitle {
  title: string;
  withArrow?: boolean;
}

const PageTitle = ({ title, withArrow = false }: IPageTitle) => {
  const router = useRouter();
  const breadcrumbItems = useGenerateBreadcrumbItems();

  return (
    <div className="mb-[20px] flex items-center gap-[20px]">
      {withArrow && (
        <div
          className="min-w-[36px] cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowBackIcon />
        </div>
      )}
      <div>
        <h1 className="text-heading-6 font-[700]">{title}</h1>
        <Breadcrumb className="font-semibold" items={breadcrumbItems} />
      </div>
    </div>
  );
};

export default PageTitle;
