import {
  Form,
  type FormInstance,
  Input,
  Radio,
  type RadioChangeEvent,
} from 'antd';
import CusttomInputLabel from '~/shared/container/custom-input-label/CustomInputLabel';
import { type TRequestReason } from '~/shared/models/generalInterfaces';
import { type IPayloadKTP } from '~/shared/models/ktpinterfaces';
import React, { useState } from 'react';

type RadioValue = 'baru' | 'pindah_datang' | 'hilang';

const AddKTPRequestForm = ({
  form,
  handleRadioChange,
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
            name="contact"
            label={<CusttomInputLabel>Nomor Telepon</CusttomInputLabel>}
            rules={[{ required: true, message: 'Nomor telepon diperlukan!' }]}
          >
            <Input className="rounded-xl border-2" placeholder="08xxxxxxxxxx" />
          </Form.Item>
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
            rules={[{ required: true, message: 'NIK diperlukan!' }]}
          >
            <Input
              className="rounded-xl border-2"
              placeholder="3522xxxxxxxxxxxx"
            />
          </Form.Item>
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
          <Radio value="baru">Baru</Radio>
          <Radio value="pindah_datang">Pindah Datang</Radio>
          <Radio value="hilang">Hilang/Rusak</Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default AddKTPRequestForm;
