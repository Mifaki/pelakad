'use client';

import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  type RadioChangeEvent,
  Upload,
} from 'antd';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

interface CustomLabelProps {
  children: React.ReactNode;
}

const CustomLabel: React.FC<CustomLabelProps> = ({ children }) => (
  <span className={`${poppins.className} text-base font-semibold text-black`}>
    {children}
  </span>
);

interface FormValues {
  namaKepalaKeluarga: string;
  alamat: string;
  kodePos: string;
  kontak: string;
}

const KKAplicantData: React.FC = () => {
  const [form] = Form.useForm<FormValues>();
  const [radioValue, setRadioValue] = useState('Baru');
  const [currentStep, setCurrentStep] = useState(0);
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);

  const handleMutate = (values: FormValues) => {
    console.log('Form Values:', values);
  };

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <section className="container overflow-hidden bg-pd-primary">
      <div className="mt-2 rounded-2xl border-2 border-white bg-[#B6CEEE] px-2 pt-2">
        <h2
          className={`my text-center text-heading-5 font-semibold ${poppins.className}`}
        >
          Pengajuan KK Baru
        </h2>
        <h3
          className={`my pt-3 text-center text-heading-6 font-semibold ${poppins.className}`}
        >
          Data Kepala Keluarga
        </h3>

        <div className="kk-form-container">
          <Form<FormValues>
            form={form}
            layout="vertical"
            onFinish={handleMutate}
            className="p-4"
          >
            <Form.Item
              name="namaKepalaKeluarga"
              label={<CustomLabel>Nama Kepala Keluarga</CustomLabel>}
              rules={[{ required: true, message: 'Nama Kepala Keluarga!' }]}
            >
              <Input
                className="rounded-xl border-2"
                placeholder="Tatang Sutarman"
              />
            </Form.Item>

            <Form.Item
              name="alamat"
              label={<CustomLabel>Alamat/Address</CustomLabel>}
              rules={[{ required: true, message: 'Alamat diperlukan!' }]}
            >
              <Input
                className="rounded-xl border-2"
                placeholder="Jl.xxxxxxxxxx"
              />
            </Form.Item>

            <Form.Item
              name="kodePos"
              label={<CustomLabel>Kode Pos/Post Code</CustomLabel>}
              rules={[{ required: true, message: 'Kode Pos diperlukan!' }]}
            >
              <Input className="rounded-xl border-2" placeholder="123456" />
            </Form.Item>

            <Form.Item
              name="kontak"
              label={
                <CustomLabel>HandPhone/Telepon/Telephone Number</CustomLabel>
              }
              rules={[{ required: true, message: 'Nomor Telepon diperlukan!' }]}
            >
              <Input
                className="rounded-xl border-2"
                placeholder="3522xxxxxxxxxxxx"
              />
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="mb-5 mt-5 flex justify-center"></div>
    </section>
  );
};

export default KKAplicantData;
