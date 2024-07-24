'use client';

import { type IStep } from '~/shared/models/generalInterfaces';
import { message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';
import ApplicantIdentityForm from './form/ApplicantIdentityForm';
import BirthCertificateDataForm from './form/BirthCertificateDataForm';
import CustomStepperButton from '~/shared/container/custom-steps/CustomStepperButton';
import CustomSteps from '~/shared/container/custom-steps/CustomSteps';
import { type IAktaLahirPayload } from '~/shared/models/aktalahirinterfaces';
import { submitBirthCertificateRequest } from '~/shared/actions/repositories/BirthCertificateService';

const AktaLahirContainer = () => {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);

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

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleMutate = async (values: IAktaLahirPayload) => {
    setIsLoading(true);
    try {
      await submitBirthCertificateRequest(values);
      message.success('Permohonan KTP berhasil diajukan');
      form.resetFields();
    } catch (error) {
      console.log(error);
      message.error('Gagal mengajukan permohonan KTP, silahkan coba kembali');
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
        <CustomSteps steps={steps} current={current} />
      </div>
      <CustomStepperButton
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
