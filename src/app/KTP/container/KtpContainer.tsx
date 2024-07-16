'use client';

import React, { useState } from 'react';
import { Form, Input, Button, Radio, type RadioChangeEvent } from 'antd';
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

type AlasanPengajuan = 'baru' | 'pindah datang' | 'hilang' | 'rusak';

interface FormValues {
  kontak: string;
  namaLengkap: string;
  nik: string;
  nkk: string;
  alasanPengajuan: AlasanPengajuan;
}

const KtpContainer: React.FC = () => {
  const [form] = Form.useForm<FormValues>();
  const [radioValue, setRadioValue] = useState<AlasanPengajuan>('baru');

  const handleMutate = (values: FormValues) => {
    console.log('Form Values:', values);
  };

  const onRadioChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value as AlasanPengajuan);
  };

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <section className="container overflow-hidden bg-pd-primary">
      <div className="mx-5 mt-14 rounded-2xl border-2 border-white bg-[#B6CEEE] px-5 pt-4">
        <h2
          className={`my text-center text-heading-5 font-semibold ${poppins.className}`}
        >
          Data Pemohon
        </h2>
        <h3
          className={`my pt-3 text-center text-heading-6 font-semibold ${poppins.className}`}
        >
          Kartu Tanda Penduduk
        </h3>
        <div className="ktp-form-container">
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
                <Radio value="pindah datang">Pindah Datang</Radio>
                <Radio value="hilang">Hilang</Radio>
                <Radio value="rusak">Rusak</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="mb-5 mt-5 flex justify-center">
        <Button
          className="h-12 w-72 bg-[#3B82F6] text-lg font-semibold"
          type="primary"
          onClick={handleSubmit}
        >
          Selesai
        </Button>
      </div>
    </section>
  );
};

export default KtpContainer;
