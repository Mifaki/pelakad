'use client';

import { type IStep } from '~/shared/models/generalInterfaces';
import { Form, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';
import ApplicantIdentityForm from './form/ApplicantIdentityForm';
import BirthCertificateDataForm from './form/BirthCertificateDataForm';
import CustomStepperButton from '~/shared/container/custom-steps/CustomStepperButton';
import CustomSteps from '~/shared/container/custom-steps/CustomSteps';
import { type IAktaLahirPayload } from '~/shared/models/aktalahirinterfaces';
import { submitBirthCertificateRequest } from '~/shared/actions/repositories/BirthCertificateService';
import useEnsureArray from '~/shared/usecase/useEnsureArray';
import { useRouter } from 'next/navigation';

type FormData = Partial<IAktaLahirPayload>;

const AktaLahirContainer = () => {
  const ensureArray = useEnsureArray;
  const router = useRouter();

  const [form] = useForm<FormData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({});

  const steps: IStep[] = [
    {
      title: 'Pengajuan Akta Lahir ',
      subTitle: 'Data Pemohon',
      content: <ApplicantIdentityForm form={form} />,
    },
    {
      title: 'Pengajuan Akta Lahir Baru',
      subTitle: 'Data Akta Lahir',
      content: <BirthCertificateDataForm form={form} />,
    },
  ];

  const [current, setCurrent] = useState<number>(0);

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

      const payload: IAktaLahirPayload = {
        full_name: allFormData.full_name ?? '',
        phone_number: allFormData.phone_number ?? '',
        nik_id: allFormData.nik_id ?? '',
        kk_id: allFormData.kk_id ?? '',
        family_card_image: ensureArray(allFormData.family_card_image),
        father_identity_card_url: ensureArray(
          allFormData.father_identity_card_url,
        ),
        mother_identity_card_url: ensureArray(
          allFormData.mother_identity_card_url,
        ),
        out_of_wedlock_letter_url: ensureArray(
          allFormData.out_of_wedlock_letter_url,
        ),
        marriage_certificate_url: ensureArray(allFormData.marriage_book_url),
        witness_1_identity_card_url: ensureArray(
          allFormData.witness_1_identity_card_url,
        ),
        witness_2_identity_card_url: ensureArray(
          allFormData.witness_2_identity_card_url,
        ),
        marriage_book_url: ensureArray(allFormData.marriage_book_url),
      };

      await submitBirthCertificateRequest(payload);
      message.success('Permohonan Akta Lahir berhasil diajukan');
      form.resetFields();
      setFormData({});
      router.push('/');
    } catch (error) {
      console.error(error);
      message.error(
        'Gagal mengajukan permohonan Akta Lahir, silahkan coba kembali',
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

export default AktaLahirContainer;
