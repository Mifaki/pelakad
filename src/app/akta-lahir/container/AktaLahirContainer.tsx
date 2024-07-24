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

type FormData = Partial<IAktaLahirPayload>;

const AktaLahirContainer = () => {
  const [form] = useForm<FormData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({});

  const steps: IStep[] = [
    {
      title: 'Pemohon',
      content: <ApplicantIdentityForm form={form} />,
    },
    {
      title: 'Akta Lahir',
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
        family_card_image: allFormData.family_card_image ?? [],
        father_identity_card_url: allFormData.father_identity_card_url ?? '',
        mother_identity_card_url: allFormData.mother_identity_card_url ?? '',
        out_of_wedlock_letter_url: allFormData.out_of_wedlock_image_url ?? '',
        marriage_certificate_url: allFormData.marriage_certificate_url ?? [],
        witness_1_identity_card_url:
          allFormData.witness_1_identity_card_url ?? '',
        witness_2_identity_card_url:
          allFormData.witness_2_identity_card_url ?? '',
        marriage_book_url: allFormData.marriage_book_url ?? [],
        out_of_wedlock_image_url: allFormData.out_of_wedlock_image_url,
      };

      await submitBirthCertificateRequest(payload);
      message.success('Permohonan Akta Lahir berhasil diajukan');
      form.resetFields();
      setFormData({});
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
    <div className="container min-h-screen w-full bg-pd-primary py-14">
      <div className="mb-6 rounded-2xl border-2 border-white bg-[#B6CEEE] px-5 py-4">
        <h2 className="mb-3 text-center text-heading-5 font-semibold">
          Data Pemohon
        </h2>
        <h3 className="text-center text-heading-6 font-semibold">
          Kartu Tanda Penduduk
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
