'use client';

import React, { useState } from 'react';
import { Form, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useRouter } from 'next/navigation';
import CustomSteps from '~/shared/container/custom-steps/CustomSteps';
import { type IStep } from '~/shared/models/generalInterfaces';
import CustomStepperButton from '~/shared/container/custom-steps/CustomStepperButton';
import { type IPayloadKTP } from '~/shared/models/ktpinterfaces';
import { submitKTPRequest } from '~/shared/actions/repositories/KTPService';
import AddKTPRequestForm from './form/AddKTPRequestForm';
import NewKTPForm from './form/NewKTPForm';
import MoveInKTPForm from './form/MoveInKTPForm';
import LostKTPForm from './form/LostKTPForm';
import useEnsureArray from '~/shared/usecase/useEnsureArray';

type FormData = IPayloadKTP;

const KtpContainer = () => {
  const [form] = useForm<FormData>();
  const router = useRouter();
  const ensureArray = useEnsureArray;

  const [current, setCurrent] = useState(0);
  const [selectedReason, setSelectedReason] = useState<string>('baru');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>();

  const handleRadioChange = (value: string) => {
    setSelectedReason(value);
  };

  const renderContent = () => {
    if (current === 0) {
      return (
        <AddKTPRequestForm handleRadioChange={handleRadioChange} form={form} />
      );
    }
    switch (selectedReason) {
      case 'baru':
        return <NewKTPForm form={form} />;
      case 'pindah_datang':
        return <MoveInKTPForm form={form} />;
      case 'hilang':
        return <LostKTPForm form={form} />;
      default:
        return null;
    }
  };

  const steps: IStep[] = [
    {
      title: 'Pengajuan KTP',
      subTitle: 'Data Pemohon',
      content: renderContent(),
    },
    {
      title: 'Pengajuan KTP',
      subTitle: 'Data Lanjutan',
      content: renderContent(),
    },
  ];

  const next = async () => {
    try {
      const values = await form.validateFields();
      setFormData((prevData) => ({ ...prevData, ...values }));
      setCurrent(current + 1);
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleMutate = async () => {
    try {
      setIsLoading(true);
      const currentStepValues = await form.validateFields();
      const allFormData: FormData = { ...formData, ...currentStepValues };

      const payload: IPayloadKTP = {
        full_name: allFormData.full_name ?? '',
        contact: allFormData.contact ?? '',
        nik_id: allFormData.nik_id ?? '',
        kk_id: allFormData.kk_id ?? '',
        reason: allFormData.reason ?? '',
        family_card_url: allFormData.family_card_url ?? '',
        birth_certificate_url: allFormData.birth_certificate_url ?? '',
        marriage_book_url: ensureArray(allFormData.marriage_book_url),
        foreign_move_cert_url: allFormData.foreign_move_cert_url ?? '',
        damaged_ktp_url: allFormData.damaged_ktp_url ?? '',
        police_report_url: allFormData.police_report_url ?? '',
      };

      await submitKTPRequest(payload);
      message.success('Permohonan KTP berhasil diajukan');
      form.resetFields();
      router.push('/');
    } catch (error) {
      console.error(error);
      message.error('Gagal mengajukan permohonan KTP, silahkan coba kembali');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container min-h-screen w-full max-w-[100vw] bg-pd-primary py-14">
      <div className="mb-6 rounded-2xl border-2 border-white bg-[#B6CEEE] px-5 py-4">
        <h2 className="mb-2 text-center text-heading-5 font-semibold">
          {steps[current]?.title}
        </h2>
        <h3 className="mb-4 text-center text-heading-6 font-semibold">
          {steps[current]?.subTitle}
        </h3>
        <Form form={form} layout="vertical" onFinish={handleMutate}>
          <CustomSteps steps={steps} current={current} />
        </Form>
      </div>
      <CustomStepperButton
        form={form}
        current={current}
        stepsLength={steps.length}
        onNext={next}
        onPrev={prev}
        onComplete={handleMutate}
        mutateLoading={isLoading}
      />
    </div>
  );
};

export default KtpContainer;
