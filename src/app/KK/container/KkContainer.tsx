'use client';
import React, { useState } from 'react';
import { message, theme } from 'antd';
import KKAplicantData from './Form/KKAplicantData';
import KKoHData from './Form/KKHoHData';
import CustomSteps from '~/shared/container/custom-steps/CustomSteps';
import { type IStep } from '~/shared/models/generalInterfaces';
import CustomStepperButton from '~/shared/container/custom-steps/CustomStepperButton';

const steps: IStep[] = [
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

const KkContainer: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onComplete = () => {
    message.success('Processing complete!');
  };

  return (
    <div className="bg-pd-primary p-4">
      <CustomSteps steps={steps} current={current} />
      <CustomStepperButton
        current={current}
        stepsLength={steps.length}
        onNext={next}
        onPrev={prev}
        onComplete={onComplete}
        mutateLoading={false}
      />
    </div>
  );
};

export default KkContainer;
