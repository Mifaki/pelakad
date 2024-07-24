import { Form, type FormInstance } from 'antd';
import React from 'react';
import CloudUpload from '~/shared/container/cloud-upload/CloudUpload';
import CusttomInputLabel from '~/shared/container/custom-input-label/CustomInputLabel';

type IBirthCertificateDataForm = {
  form: FormInstance<any>;
};

const BirthCertificateDataForm = ({ form }: IBirthCertificateDataForm) => {
  return (
    <div className="flex flex-col items-center gap-0 md:flex-row md:gap-4">
      <div className="w-full basis-1/2">
        <Form.Item
          name="family_card_image"
          label={
            <CusttomInputLabel>
              Kartu Keluarga<span className="text-gray-600">/halaman</span>
            </CusttomInputLabel>
          }
          rules={[{ required: true, message: 'Kartu keluarga diperlukan!' }]}
        >
          <CloudUpload name="family_card_image" form={form} />
        </Form.Item>
        <Form.Item
          name="father_identity_card_url"
          label={<CusttomInputLabel>KTP Ayah</CusttomInputLabel>}
        >
          <CloudUpload
            name="father_identity_card_url"
            form={form}
            multipleFile={false}
          />
          <p className="mt-2 text-xs font-medium">
            *Opsional jika belum menikah
          </p>
        </Form.Item>
      </div>

      <div className="w-full basis-1/2 gap-4">
        <Form.Item
          name="mother_identity_card_url"
          label={<CusttomInputLabel>KTP Ibu</CusttomInputLabel>}
          rules={[{ required: true, message: 'KTP Ibu diperlukan!' }]}
        >
          <CloudUpload
            name="mother_identity_card_url"
            form={form}
            multipleFile={false}
          />
        </Form.Item>

        <Form.Item
          name="witness_1_identity_card_url"
          label={<CusttomInputLabel>KTP Saksi 1</CusttomInputLabel>}
          rules={[{ required: true, message: 'KTP saksi 1 diperlukan!' }]}
        >
          <CloudUpload
            name="witness_1_identity_card_url"
            form={form}
            multipleFile={false}
          />
        </Form.Item>
      </div>
      <div className="w-full basis-1/2">
        <Form.Item
          name="witness_2_identity_card_url"
          label={<CusttomInputLabel>KTP Saksi 2</CusttomInputLabel>}
          rules={[{ required: true, message: 'KTP saksi 2 diperlukan!' }]}
        >
          <CloudUpload
            name="witness_2_identity_card_url"
            form={form}
            multipleFile={false}
          />
        </Form.Item>
        <Form.Item
          name="marriage_certificate_url"
          label={
            <CusttomInputLabel>Surat Keterangan Kelahiran</CusttomInputLabel>
          }
          rules={[
            {
              required: true,
              message: 'Surat Keterangan Kelahiran diperlukan!',
            },
          ]}
        >
          <CloudUpload name="marriage_certificate_url" form={form} />
          <p className="mt-2 text-xs font-medium">
            *Unggah Surat Kebenaran Kelahiran jika Surat Keterangan Kelahiran
            dari rumah sakit Tidak ada
          </p>
        </Form.Item>
      </div>

      <div className="w-full basis-1/2 gap-4">
        <Form.Item
          name="marriage_book_url"
          label={
            <CusttomInputLabel>
              Buku nikah Legalisir KUA
              <span className="text-gray-600">/halaman</span>
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
          <p className="mt-2 text-xs font-medium">
            *Unggah Surat Kebenaran Kelahiran jika Surat Keterangan Kelahiran
            dari rumah sakit Tidak ada
          </p>
        </Form.Item>

        <Form.Item
          name="out_of_wedlock_image_url"
          label={
            <CusttomInputLabel>Surat Pernyataan Luar Nikah</CusttomInputLabel>
          }
          rules={[
            {
              required: true,
              message: 'Surat Pernyataan Luar Nikah diperlukan!',
            },
          ]}
        >
          <CloudUpload
            name="out_of_wedlock_image_url"
            form={form}
            multipleFile={false}
          />
          <p className="mt-2 text-xs font-medium">
            *Surat pernyataan luar nikah disertakan bayi yang lahir diluar
            pernikahan/tanggal pernikahan orangtua sesudah kelahiran bayi.
          </p>
        </Form.Item>
      </div>
    </div>
  );
};

export default BirthCertificateDataForm;
