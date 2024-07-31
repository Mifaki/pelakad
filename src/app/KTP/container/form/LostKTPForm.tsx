import React, { useState } from 'react';

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
import CloudUpload from '~/shared/container/cloud-upload/CloudUpload';

type AlasanPengajuan = 'hilang' | 'rusak';

interface FormValues {
  alasanPengajuan: AlasanPengajuan;
}

type IAddKTPRequestForm = {
  form: FormInstance<IPayloadKTP>;
  radioValue: TRequestReason;
  handleRadioChange: (e: RadioChangeEvent) => void;
  handleMutate: (values: IPayloadKTP) => Promise<void>;
};

const LostKTPForm = ({ form }: { form: FormInstance<any> }) => {
  const [showAdditionalOptionsLost, setShowAdditionalOptionsLost] =
    useState(false);
  const [showAdditionalOptionsBroken, setShowAdditionalOptionsBroken] =
    useState(false);
  const [radioValue, setRadioValue] = useState('Baru');

  const onRadioChange = (e: RadioChangeEvent) => {
    const value = e.target.value as AlasanPengajuan;
    setRadioValue(value);
    setShowAdditionalOptionsLost(value === 'hilang');
    setShowAdditionalOptionsBroken(value === 'rusak');
  };

  const AdditionalOptionsLost = () => (
    <div>
      <Form.Item
        name="damaged_ktp_url"
        label={<CusttomInputLabel>KTP-El Rusak</CusttomInputLabel>}
        rules={[{ required: true, message: 'KTP-El Rusak diperlukan!' }]}
      >
        <CloudUpload name="damaged_ktp_url" form={form} />
      </Form.Item>
    </div>
  );

  const AdditionalOptionsBroken = () => (
    <div>
      <Form.Item
        name="police_report_url"
        label={
          <CusttomInputLabel>
            Surat keterangan hilang dari kepolisian
          </CusttomInputLabel>
        }
        rules={[
          {
            required: true,
            message: 'Surat keterangan hilang dari kepolisian diperlukan!',
          },
        ]}
      >
        <CloudUpload name="police_report_url" form={form} />
      </Form.Item>
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="mb-4">
          {' '}
          <Form.Item
            name="alasanPengajuan"
            label={<CusttomInputLabel>Alasan Pengajuan</CusttomInputLabel>}
            rules={[
              {
                required: true,
                message: 'Pilih salah satu alasan pengajuan!',
              },
            ]}
          >
            <Radio.Group onChange={onRadioChange} value={radioValue}>
              <Radio value="hilang">Hilang</Radio>
              <Radio value="rusak">Rusak</Radio>
            </Radio.Group>
          </Form.Item>
        </div>

        <Form.Item
          name="birth_certificate_url"
          label={
            <CusttomInputLabel>
              Akta Kelahiran<span className="text-gray-600"></span>
            </CusttomInputLabel>
          }
          rules={[{ required: true, message: 'Akta Kelahiran diperlukan!' }]}
        >
          <CloudUpload name="birth_certificate_url" form={form} />
        </Form.Item>

        <div className="mb-4">
          <Form.Item
            name="family_card_url"
            label={
              <CusttomInputLabel>
                Kartu Keluarga<span className="text-gray-600"></span>
              </CusttomInputLabel>
            }
            rules={[{ required: true, message: 'Kartu keluarga diperlukan!' }]}
          >
            <CloudUpload name="family_card_url" form={form} />
          </Form.Item>
        </div>

        <Form.Item
          name="marriage_book_url"
          label={
            <CusttomInputLabel>
              Buku nikah
              <span className="text-gray-600"> / Kutipan Akta Perkawinan</span>
            </CusttomInputLabel>
          }
          rules={[
            {
              required: true,
              message: 'Buku nikah Legalisir KUA diperlukan!',
            },
          ]}
        >
          <CloudUpload name="marriage_book_url" form={form} />
        </Form.Item>
      </div>

      <Form.Item>
        {showAdditionalOptionsLost && <AdditionalOptionsLost />}
        {showAdditionalOptionsBroken && <AdditionalOptionsBroken />}
      </Form.Item>
    </>
  );
};

export default LostKTPForm;
