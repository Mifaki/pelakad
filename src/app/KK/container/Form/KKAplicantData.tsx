'use client';

import React, { useState } from 'react';
import {
  Form,
  type FormInstance,
  Input,
  Radio,
  type RadioChangeEvent,
} from 'antd';
import CusttomInputLabel from '~/shared/container/custom-input-label/CustomInputLabel';

type RadioValue = 'new' | 'data_change' | 'lost' | 'damaged';

const KKAplicantData = ({
  handleRadioChange,
  form,
}: {
  handleRadioChange: any;
  form: FormInstance<any>;
}) => {
  const [radioValue, setRadioValue] = useState('Baru');

  const onRadioChange = (e: RadioChangeEvent) => {
    const value = e.target.value as RadioValue;
    handleRadioChange(value);
    setRadioValue(value);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="mb-4">
          <Form.Item
            name="phone_number"
            label={<CusttomInputLabel>Nomor Telepon</CusttomInputLabel>}
            rules={[{ required: true, message: 'Nomor telepon diperlukan!' }]}
            className="!mb-2"
          >
            <Input className="rounded-xl border-2" placeholder="08xxxxxxxxxx" />
          </Form.Item>
          <p className="text-xs font-medium">
            *Nomor yang akan digunakan untuk mengirimkan notifikasi pengambilan
          </p>
        </div>

        <Form.Item
          name="full_name"
          label={<CusttomInputLabel>Nama Lengkap</CusttomInputLabel>}
          rules={[{ required: true, message: 'Nama Lengkap diperlukan!' }]}
        >
          <Input
            className="rounded-xl border-2"
            placeholder="Masukkan nama lengkap"
          />
        </Form.Item>

        <div className="mb-4">
          <Form.Item
            name="nik_id"
            label={
              <CusttomInputLabel>No. Induk Kependudukan</CusttomInputLabel>
            }
            rules={[
              { required: true, message: 'No. Induk Kependudukan diperlukan!' },
            ]}
            className="!mb-2"
          >
            <Input
              name="nikd_id"
              className="rounded-xl border-2"
              placeholder="3522xxxxxxxxxxxxxx"
            />
          </Form.Item>
          <p className="text-xs font-medium">*Ketik (-) jika tidak ada</p>
        </div>

        <Form.Item
          name="kk_id"
          label={<CusttomInputLabel>Nomor Kartu Keluarga</CusttomInputLabel>}
          rules={[{ required: true, message: 'NKK diperlukan!' }]}
        >
          <Input
            className="rounded-xl border-2"
            placeholder="3522xxxxxxxxxxxx"
          />
        </Form.Item>
      </div>
      <Form.Item
        name="reason"
        label={<CusttomInputLabel>Alasan Pengajuan</CusttomInputLabel>}
        rules={[
          {
            required: true,
            message: 'Pilih salah satu alasan pengajuan!',
          },
        ]}
      >
        <Radio.Group onChange={onRadioChange} value={radioValue}>
          <Radio value="new">Baru</Radio>
          <Radio value="data_change">Perubahan Data</Radio>
          <Radio value="lost">Hilang</Radio>
          <Radio value="damaged">Rusak</Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default KKAplicantData;
