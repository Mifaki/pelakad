'use client';

import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

const KtpContainer = () => {
  const [form] = Form.useForm();
  const [radioValue, setRadioValue] = useState('Baru');

  const handleMutate = (values: any) => {
    console.log('Form Values:', values);
  };

  const onRadioChange = (e: any) => {
    setRadioValue(e.target.value);
  };

  return (
    <>
      <div className="ktp-form-container">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleMutate}
          className="p-4"
        >
          <Form.Item
            name="kontak"
            label="Kontak (WhatsApp/Line)"
            rules={[{ required: true, message: 'Kontak diperlukan!' }]}
          >
            <Input placeholder="08xxxxxxxxxx" />
          </Form.Item>

          <Form.Item
            name="namaLengkap"
            label="Nama Lengkap"
            rules={[{ required: true, message: 'Nama Lengkap diperlukan!' }]}
          >
            <Input placeholder="Masukkan nama lengkap" />
          </Form.Item>

          <Form.Item
            name="nik"
            label="No. Induk Kependudukan"
            rules={[{ required: true, message: 'NIK diperlukan!' }]}
          >
            <Input placeholder="3522xxxxxxxxxxxx" />
          </Form.Item>

          <Form.Item
            name="nkk"
            label="Nomor Kartu Keluarga"
            rules={[{ required: true, message: 'NKK diperlukan!' }]}
          >
            <Input placeholder="3522xxxxxxxxxxxx" />
          </Form.Item>

          <Form.Item
            name="alasanPengajuan"
            label="Alasan Pengajuan"
            rules={[
              { required: true, message: 'Pilih salah satu alasan pengajuan!' },
            ]}
          >
            <Radio.Group>
              <Radio value="baru">Baru</Radio>
              <Radio value="pindah datang">Pindah Datang</Radio>
              <Radio value="hilang">Hilang</Radio>
              <Radio value="rusak">Rusak</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default KtpContainer;
