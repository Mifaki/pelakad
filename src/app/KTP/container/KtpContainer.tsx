'use client';
import { type IStep } from '~/shared/models/generalInterfaces';
import React, { useState } from 'react';
import { Button, message, type RadioChangeEvent } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { type TRequestReason } from '~/shared/models/generalInterfaces';
import { type IPayloadKTP } from '~/shared/models/ktpinterfaces';
import { submitKTPRequest } from '~/shared/actions/repositories/KTPService';
import CustomSteps from '~/shared/container/custom-steps/CustomSteps';
import CustomStepperButton from '~/shared/container/custom-steps/CustomStepperButton';
import AddKTPRequestForm from './form/AddKTPRequestForm';
import NewKTPForm from './form/NewKTPForm';
import KKAplicantData from '~/app/KK/container/Form/KKAplicantData';
import MoveInKTPForm from './form/MoveInKTPForm';
import LostKTPForm from './form/LostKTPForm';

const KtpContainer: React.FC = () => {
  const [form] = useForm();
  const [radioValue, setRadioValue] = useState<TRequestReason>('baru');
  const [isLoading, setIsLoading] = useState(false);
  const [current, setCurrent] = useState(0);

  const onRadioChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value as TRequestReason);
    setCurrent(0); // Reset to first step when changing request type
  };

  const handleMutate = async (values: IPayloadKTP) => {
    setIsLoading(true);
    try {
      await submitKTPRequest(values);
      message.success('Permohonan KTP berhasil diajukan');
      form.resetFields();
      setCurrent(0);
    } catch (error) {
      message.error('Gagal mengajukan permohonan KTP, silahkan coba kembali');
    } finally {
      setIsLoading(false);
    }
  };

  const getSteps = () => {
    const commonSteps = [
      {
        title: 'Data Pemohon',
        content: (
          <AddKTPRequestForm
            form={form}
            handleRadioChange={onRadioChange}
            radioValue={radioValue}
            handleMutate={handleMutate}
          />
        ),
      },
    ];

    const specificStep = {
      baru: {
        title: 'KTP Baru',
        content: (
          <NewKTPForm
            form={form}
            handleRadioChange={onRadioChange}
            radioValue={radioValue}
            handleMutate={handleMutate}
          />
        ),
      },
      'pindah datang': {
        title: 'Pindah Datang',
        content: (
          <MoveInKTPForm
            form={form}
            handleRadioChange={onRadioChange}
            radioValue={radioValue}
            handleMutate={handleMutate}
          />
        ),
      },
      hilang: {
        title: 'KTP Hilang/Rusak',
        content: (
          <LostKTPForm
            form={form}
            handleRadioChange={onRadioChange}
            radioValue={radioValue}
            handleMutate={handleMutate}
          />
        ),
      },
      rusak: {
        title: 'KTP Rusak',
        content: (
          <NewKTPForm
            form={form}
            handleRadioChange={onRadioChange}
            radioValue={radioValue}
            handleMutate={handleMutate}
          />
        ),
      },
    };

    return [...commonSteps, specificStep[radioValue]];
  };

  const steps = getSteps();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="max-w[100vw] container min-h-screen w-full bg-pd-primary py-14">
      <div className="mb-6 rounded-2xl border-2 border-white bg-[#B6CEEE] px-5 py-4">
        <h2 className="mb-3 text-center text-heading-5 font-semibold">
          Pengajuan KTP
        </h2>
        <h3 className="mb-4 text-center text-heading-6 font-semibold">
          Kartu Tanda Penduduk
        </h3>
        <CustomSteps steps={steps} current={current} />
      </div>
      <CustomStepperButton
        current={current}
        stepsLength={steps.length}
        onNext={next}
        onPrev={prev}
        onComplete={form.submit}
        mutateLoading={isLoading}
      />
    </div>
  );
};

export default KtpContainer;
