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

const LostKTPForm = ({
  form,
  handleRadioChange,
  handleMutate,
}: IAddKTPRequestForm) => {
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
        name="broken_identity_card"
        label={<CusttomInputLabel>KTP-El Rusak</CusttomInputLabel>}
        rules={[{ required: true, message: 'KTP-El Rusak diperlukan!' }]}
      >
        <CloudUpload name="broken_identity_card" form={form} />
      </Form.Item>
    </div>
  );

  const AdditionalOptionsBroken = () => (
    <div>
      <Form.Item
        name="missing_certificate_from_police"
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
        <CloudUpload name="missing_certificate_from_police" form={form} />
      </Form.Item>
    </div>
  );

  return (
    <Form<IPayloadKTP>
      form={form}
      layout="vertical"
      onFinish={handleMutate}
      className="p-4"
    >
      <div className="flex flex-col items-center gap-0 md:flex-row md:gap-4">
        <div className="w-full basis-1/2">
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

          <Form.Item
            name="birth_certificate_image"
            label={
              <CusttomInputLabel>
                Akta Kelahiran<span className="text-gray-600"></span>
              </CusttomInputLabel>
            }
            rules={[{ required: true, message: 'Akta Kelahiran diperlukan!' }]}
          >
            <CloudUpload name="birth_certificate_image" form={form} />
          </Form.Item>

          <Form.Item
            name="family_card_image"
            label={
              <CusttomInputLabel>
                Kartu Keluarga<span className="text-gray-600"></span>
              </CusttomInputLabel>
            }
            rules={[{ required: true, message: 'Kartu keluarga diperlukan!' }]}
          >
            <CloudUpload name="family_card_image" form={form} />
          </Form.Item>

          <Form.Item
            name="marriage_book_url"
            label={
              <CusttomInputLabel>
                Buku nikah
                <span className="text-gray-600">
                  {' '}
                  / Kutipan Akta Perkawinan
                </span>
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

          <Form.Item>
            {showAdditionalOptionsLost && <AdditionalOptionsLost />}
            {showAdditionalOptionsBroken && <AdditionalOptionsBroken />}
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default LostKTPForm;
