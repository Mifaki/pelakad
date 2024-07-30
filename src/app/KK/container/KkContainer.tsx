'use client';

import React, { useState } from 'react';
import { Form, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useRouter } from 'next/navigation';
import KKAplicantData from './Form/KKAplicantData';
import CustomSteps from '~/shared/container/custom-steps/CustomSteps';
import { type IStep } from '~/shared/models/generalInterfaces';
import CustomStepperButton from '~/shared/container/custom-steps/CustomStepperButton';
import NewFamilyCardForm from './Form/NewFamilyCardForm';
import UpdateFamilyCardForm from './Form/UpdateFamilyCardForm';
import LostFamilyCardForm from './Form/LostFamilyCardForm';
import DamagedFamilyCardForm from './Form/DamagedFamilyCardForm';
import {
  type IFamilyCardPayload,
  type IRootFamilyCardRequest,
} from '~/shared/models/familycardinterfaces';
import { submitFamilyCardRequest } from '~/shared/actions/repositories/FamilyCardService';
import useEnsureArray from '~/shared/usecase/useEnsureArray';

type FormData = Partial<IRootFamilyCardRequest>;

const KkContainer = () => {
  const [form] = useForm<FormData>();
  const router = useRouter();
  const ensureArray = useEnsureArray;

  const [current, setCurrent] = useState(0);
  const [selectedReason, setSelectedReason] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({});

  const handleRadioChange = (value: string) => {
    setSelectedReason(value);
  };

  const renderContent = () => {
    if (current === 0) {
      return (
        <KKAplicantData handleRadioChange={handleRadioChange} form={form} />
      );
    }
    switch (selectedReason) {
      case 'new':
        return <NewFamilyCardForm form={form} />;
      case 'data_change':
        return <UpdateFamilyCardForm form={form} />;
      case 'lost':
        return <LostFamilyCardForm form={form} />;
      case 'damaged':
        return <DamagedFamilyCardForm form={form} />;
      default:
        return null;
    }
  };

  const steps: IStep[] = [
    {
      title: 'Pengajuan Kartu Keluarga',
      subTitle: 'Data Pemohon',
      content: renderContent(),
    },
    {
      title: 'Pengajuan Kartu Keluarga',
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

      const payload: IFamilyCardPayload = {
        full_name: allFormData.full_name ?? '',
        phone_number: allFormData.phone_number ?? '',
        nik_id: allFormData.nik_id ?? '',
        kk_id: allFormData.kk_id ?? '',
        reason: allFormData.reason ?? '',
        new_card_reason: allFormData.new_card_reason ?? '',
        father_identity_card_url: allFormData.father_identity_card_url ?? '',
        mother_identity_card_url: allFormData.mother_identity_card_url ?? '',
        husband_family_card_url: allFormData.husband_family_card_url ?? '',
        wife_family_card_url: allFormData.wife_family_card_url ?? '',
        husband_birth_certificate_url:
          allFormData.husband_birth_certificate_url ?? '',
        wife_birth_certificate_url:
          allFormData.wife_birth_certificate_url ?? '',
        old_family_card_url: allFormData.old_family_card_url ?? '',
        element_change_statement_letter_url:
          allFormData.element_change_statement_letter_url ?? '',
        broken_family_card_url: allFormData.broken_family_card_url ?? '',
        original_family_card_url: allFormData.original_family_card_url ?? '',
        police_loss_report_url: allFormData.police_loss_report_url ?? '',
        marriage_book_url: ensureArray(allFormData.marriage_book_url),
        supporting_document_url: ensureArray(
          allFormData.supporting_document_url,
        ),
      };

      await submitFamilyCardRequest(payload);
      message.success('Permohonan Kartu Keluarga berhasil diajukan');
      form.resetFields();
      setFormData({});
      router.push('/');
    } catch (error) {
      console.error(error);
      message.error(
        'Gagal mengajukan permohonan Kartu Keluarga, silahkan coba kembali',
      );
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

export default KkContainer;
