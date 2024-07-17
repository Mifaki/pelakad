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
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';

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

type AlasanPengajuan = 'baru' | 'perubahan data' | 'hilang' | 'rusak';

interface FormValues {
  kontak: string;
  namaLengkap: string;
  nik: string;
  nkk: string;
  alasanPengajuan: AlasanPengajuan;
}

const KKAplicantData: React.FC = () => {
  const [form] = Form.useForm<FormValues>();
  const [radioValue, setRadioValue] = useState('Baru');
  const [currentStep, setCurrentStep] = useState(0);
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);

  const handleMutate = (values: FormValues) => {
    console.log('Form Values:', values);
  };

  const onRadioChange = (e: RadioChangeEvent) => {
    const value = e.target.value as AlasanPengajuan;
    setRadioValue(value);
    setShowAdditionalOptions(value === 'perubahan data');
  };

  const handleSubmit = () => {
    form.submit();
  };

  const AdditionalOptions = () => (
    <div>
      <div className="flex items-center justify-between">
        <h3
          className={`my text-heading-8 pt-3 font-semibold ${poppins.className}`}
        >
          Surat Perubahan
        </h3>
        <Button
          className="font-semibold"
          type="primary"
          size="middle"
          shape="default"
          onClick={() => {
            /* Logika download */
          }}
        >
          Download
        </Button>
      </div>

      <Upload name="logo" action="/upload.do" listType="picture">
        <Button className="mt-4 font-semibold" icon={<UploadOutlined />}>
          Upload Surat Perubahan
        </Button>
      </Upload>

      <p className="text-black-500 mt-2 text-xs">
        *Surat perubahan data wajib di sertakan Jika melakukan Perubahan data
        pada KK
      </p>
    </div>
  );

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
          Data Pemohon
        </h3>

        <div className="kk-form-container">
          <Form<FormValues>
            form={form}
            layout="vertical"
            onFinish={handleMutate}
            className="p-4"
          >
            <Form.Item
              name="kontak"
              label={<CustomLabel>Kontak (WhatsApp)</CustomLabel>}
              rules={[{ required: true, message: 'Kontak diperlukan!' }]}
            >
              <Input
                className="rounded-xl border-2"
                placeholder="08xxxxxxxxxx"
              />
              <p className="text-black-500 mt-2 text-xs">
                *Nomor yang akan digunakan untuk mengirimkan notifikasi
                pengambilan
              </p>
            </Form.Item>

            <Form.Item
              name="namaLengkap"
              label={<CustomLabel>Nama Lengkap</CustomLabel>}
              rules={[{ required: true, message: 'Nama Lengkap diperlukan!' }]}
            >
              <Input
                className="rounded-xl border-2"
                placeholder="Masukkan nama lengkap"
              />
            </Form.Item>

            <Form.Item
              name="nik"
              label={<CustomLabel>No. Induk Kependudukan</CustomLabel>}
              rules={[{ required: true, message: 'NIK diperlukan!' }]}
            >
              <Input
                className="rounded-xl border-2"
                placeholder="3522xxxxxxxxxxxx"
              />
              <p className="text-black-500 mt-2 text-xs">
                *Ketik (-) jika tidak ada
              </p>
            </Form.Item>

            <Form.Item
              name="nkk"
              label={<CustomLabel>Nomor Kartu Keluarga</CustomLabel>}
              rules={[{ required: true, message: 'NKK diperlukan!' }]}
            >
              <Input
                className="rounded-xl border-2"
                placeholder="3522xxxxxxxxxxxx"
              />
            </Form.Item>

            <Form.Item
              name="alasanPengajuan"
              label={<CustomLabel>Alasan Pengajuan</CustomLabel>}
              rules={[
                {
                  required: true,
                  message: 'Pilih salah satu alasan pengajuan!',
                },
              ]}
            >
              <Radio.Group onChange={onRadioChange} value={radioValue}>
                <Radio value="baru">Baru</Radio>
                <Radio value="perubahan data">Perubahan Data</Radio>
                <Radio value="hilang">Hilang</Radio>
                <Radio value="rusak">Rusak</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              {showAdditionalOptions && <AdditionalOptions />}
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="mb-2 mt-2 flex justify-center"></div>
    </section>
  );
};

export default KKAplicantData;
