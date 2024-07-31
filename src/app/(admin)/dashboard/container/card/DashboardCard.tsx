import React from 'react';
import Link from 'next/link';

type IDashboardCard = {
  title: string;
  number: number;
  link: string;
};

const DashboardCard = ({ title, number, link }: IDashboardCard) => {
  return (
    <div className="border-ny-gray-100 w-full space-y-5 rounded-lg border p-5 text-black">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">{title}</h2>
        <Link
          href={link}
          className="text-caption-2 font-black text-blue-600 hover:underline"
        >
          LIHAT SEMUA
        </Link>
      </div>
      <p className="text-heading-1 font-bold">{number}</p>
    </div>
  );
};

export default DashboardCard;
