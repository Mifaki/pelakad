'use client';
import React, { useState } from 'react';
import { Button, message, theme } from 'antd';
import KKAplicantData from './Form/KKAplicantData';
import KKoHData from './Form/KKHoHData';

const steps = [
  {
    title: 'Pemohon',
    content: <KKAplicantData />,
  },
  {
    title: 'Kepala',
    content: <KKoHData />,
  },
  {
    title: 'Wilayah',
    content: 'Last-content',
  },
  {
    title: 'Anggota',
    content: 'Last-content',
  },
];

const KkContainer = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const CustomSteps = () => (
    <div className="flex items-center justify-between rounded-full bg-blue-100 p-1">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className={`rounded-full px-2 py-1 text-sm font-medium ${
            index === current
              ? 'bg-blue-600 text-white'
              : 'bg-transparent text-blue-600'
          }`}
        >
          {step.title}
        </div>
      ))}
    </div>
  );

  const renderButtons = () => {
    if (current === 0) {
      return (
        <div className="flex justify-center">
          <Button
            className="h-12 w-80 rounded-lg bg-blue-600 text-lg font-semibold text-white"
            onClick={() => next()}
          >
            Lanjut
          </Button>
        </div>
      );
    } else if (current === steps.length - 1) {
      return (
        <div className="flex flex-col items-center space-y-4">
          <Button
            className="h-12 w-80 rounded-lg bg-blue-600 text-lg font-semibold text-white"
            onClick={() => message.success('Processing complete!')}
          >
            Selesai
          </Button>
          <Button
            className="h-12 w-80 rounded-lg border border-blue-600 bg-white text-lg font-semibold text-blue-600"
            onClick={() => prev()}
          >
            Kembali
          </Button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center space-y-4">
          <Button
            className="h-12 w-80 rounded-lg bg-blue-600 text-lg font-semibold text-white"
            onClick={() => next()}
          >
            Lanjut
          </Button>
          <Button
            className="h-12 w-80 rounded-lg border border-blue-600 bg-white text-lg font-semibold text-blue-600"
            onClick={() => prev()}
          >
            Kembali
          </Button>
        </div>
      );
    }
  };

  return (
    <div className="bg-pd-primary p-4">
      <CustomSteps />
      <div className="my-4">
        {steps[current]?.content ?? 'No content available'}
      </div>
      <div>{renderButtons()}</div>
    </div>
  );
};

export default KkContainer;
