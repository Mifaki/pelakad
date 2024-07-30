'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import { type IServiceMenu } from '~/app/models/serviceinterfaces';
import { ArrowLeftIcon } from '~/shared/container/icon/ArrowLeftIcon';

const ServiceCard = ({
  id,
  title,
  desc,
  image_url,
  image_position,
  redirect_url,
}: IServiceMenu) => {
  const router = useRouter();

  return (
    <div className="relative flex h-full flex-col">
      <img
        src={image_url}
        alt={`${title} assets`}
        className={`absolute -top-20 ${image_position === 'start' ? '-right-12 md:-left-12 md:-right-0' : '-left-12'}`}
      />
      <div className="relative z-10 flex h-full w-full flex-col justify-between space-y-10 rounded-[40px] border border-white border-opacity-50 bg-white bg-opacity-30 px-6 py-10 backdrop-blur-sm">
        <div>
          <h4 className="text-heading-2 font-bold leading-[54px]">{title}</h4>
          <p className="text-body-1">{desc}</p>
        </div>
        <div className="mt-auto flex items-center justify-center">
          <Button
            icon={<ArrowLeftIcon />}
            iconPosition="end"
            shape="round"
            size="large"
            ghost
            className="!border-black text-body-1 font-semibold !text-black"
            onClick={() => router.push(redirect_url)}
          >
            Daftar Yuk!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
