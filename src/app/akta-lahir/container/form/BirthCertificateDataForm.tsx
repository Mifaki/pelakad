import { Form, type FormInstance } from 'antd';
import React from 'react';
import DownloadButton from '~/shared/container/Button/DownloadButton';
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
          <CloudUpload
            name="family_card_image"
            form={form}
            multipleFile={false}
          />
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
          <CloudUpload
            name="marriage_certificate_url"
            form={form}
            multipleFile={false}
          />
          <p className="mt-2 text-xs font-medium">
            *Unggah Surat Kebenaran Kelahiran jika Surat Keterangan Kelahiran
            dari rumah sakit Tidak ada
          </p>
          <div className="mt-4 flex items-start justify-between">
            <p className="mt-2 text-xs font-semibold">
              SPTJM Kebenaran Kelahiran
            </p>
            <DownloadButton
              downloadUrl="https://utfs.io/f/d8529af7-c6a0-428e-8385-b3f90a79b83c-2zukl9.pdf"
              fileName="SPTJM Kebenaran Kelahiran"
            />
          </div>
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
              required: false,
              message: 'Buku nikah Legalisir KUA diperlukan!',
            },
          ]}
        >
          <CloudUpload name="marriage_book_url" form={form} />
          <p className="mt-2 text-xs font-medium">
            *Unggah SPTJM Kebenaran suami Istri jika tidak memiliki Buku Nikah
            Legalisir KUA (Opsional jika belum menikah)
          </p>
          <div className="mt-4 flex items-start justify-between">
            <p className="mt-2 text-xs font-semibold">
              Surat Kebenaran Suami Istri
            </p>
            <DownloadButton
              downloadUrl="https://utfs.io/f/af316ec9-e530-4845-a376-d906de045616-9y2b3.pdf"
              fileName="Surat Kebenaran Suami Istri"
            />
          </div>
        </Form.Item>

        <Form.Item
          name="out_of_wedlock_letter_url"
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
            name="out_of_wedlock_letter_url"
            form={form}
            multipleFile={false}
          />
          <p className="mt-2 text-xs font-medium">
            *Surat pernyataan luar nikah disertakan bayi yang lahir diluar
            pernikahan/tanggal pernikahan orangtua sesudah kelahiran bayi.
          </p>
          <div className="mt-4 flex items-start justify-between">
            <p className="mt-2 text-xs font-semibold">
              Surat Pernyataan Luar Nikah
            </p>
            <DownloadButton
              downloadUrl="https://utfs.io/f/ae6d8572-f10c-4494-b54e-88eca10100e8-g4c9qd.pdf"
              fileName="Surat Pernyataan Luar Nikah"
            />
          </div>
        </Form.Item>
      </div>
    </div>
  );
};

export default BirthCertificateDataForm;
