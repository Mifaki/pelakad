'use client';

import { Button, type RadioChangeEvent, message } from 'antd';
import { type TRequestReason } from '~/shared/models/generalInterfaces';
import { useForm } from 'antd/es/form/Form';
import AddKTPRequestForm from './form/AddKTPRequestForm';
import React, { useState } from 'react';
import { type IPayloadKTP } from '~/shared/models/ktpinterfaces';
import { submitKTPRequest } from '~/shared/actions/repositories/KTPService';

const KtpContainer: React.FC = () => {
  const [form] = useForm();
  const [radioValue, setRadioValue] = useState<TRequestReason>('baru');
  const [isLoading, setIsLoading] = useState(false);

  const handleMutate = async (values: IPayloadKTP) => {
    console.log(values);

    setIsLoading(true);
    try {
      await submitKTPRequest(values);
      message.success('Permohonan KTP berhasil diajukan');
      form.resetFields();
    } catch (error) {
      message.error('Gagal mengajukan permohonan KTP, silahkan coba kembali');
    } finally {
      setIsLoading(false);
    }
  };

  const onRadioChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value as TRequestReason);
  };

  return (
    <section className="container overflow-hidden bg-pd-primary">
      <div className="mt-14 rounded-2xl border-2 border-white bg-[#B6CEEE] px-5 pt-4">
        <h2 className="my text-center text-heading-5 font-semibold">
          Data Pemohon
        </h2>
        <h3 className="pt-3 text-center text-heading-6 font-semibold">
          Kartu Tanda Penduduk
        </h3>
        <AddKTPRequestForm
          form={form}
          handleMutate={handleMutate}
          handleRadioChange={onRadioChange}
          readioValue={radioValue}
        />
      </div>
      <div className="mb-5 mt-5 flex justify-center">
        <Button
          className="h-12 w-full bg-[#3B82F6] text-lg font-semibold"
          type="primary"
          onClick={() => form.submit()}
          loading={isLoading}
        >
          Selesai
        </Button>
      </div>
    </section>
  );
};

export default KtpContainer;
