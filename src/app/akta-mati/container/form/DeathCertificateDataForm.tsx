import { Form, type FormInstance } from 'antd';
import React from 'react';
import DownloadButton from '~/shared/container/Button/DownloadButton';
import CloudUpload from '~/shared/container/cloud-upload/CloudUpload';
import CusttomInputLabel from '~/shared/container/custom-input-label/CustomInputLabel';

type IDeathCertificateDataForm = {
  form: FormInstance<any>;
};

const DeathCertificateDataForm = ({ form }: IDeathCertificateDataForm) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <Form.Item
          name="family_card_image"
          label={<CusttomInputLabel>Kartu Keluarga</CusttomInputLabel>}
          rules={[{ required: true, message: 'Kartu keluarga diperlukan!' }]}
        >
          <CloudUpload
            name="family_card_image"
            form={form}
            multipleFile={false}
          />
        </Form.Item>
        <Form.Item
          name="reporter_identity_card_url"
          label={<CusttomInputLabel>KTP Pelapor</CusttomInputLabel>}
          rules={[{ required: true, message: 'KTP Pelapor diperlukan!' }]}
        >
          <CloudUpload
            name="reporter_identity_card_url"
            form={form}
            multipleFile={false}
          />
        </Form.Item>
        <Form.Item
          name="deceased_identity_card_url"
          label={<CusttomInputLabel>KTP Almarhum</CusttomInputLabel>}
          rules={[{ required: true, message: 'KTP Almarhum diperlukan!' }]}
        >
          <CloudUpload
            name="deceased_identity_card_url"
            form={form}
            multipleFile={false}
          />
        </Form.Item>
        <Form.Item
          name="death_certificate_url"
          label={
            <CusttomInputLabel>Surat Keterangan Kematian</CusttomInputLabel>
          }
          rules={[
            {
              required: true,
              message: 'Surat Keterangan Kematian diperlukan!',
            },
          ]}
        >
          <CloudUpload
            name="death_certificate_url"
            form={form}
            multipleFile={false}
          />
        </Form.Item>
      </div>

      <div className="flex flex-col gap-4">
        <Form.Item
          name="witness_1_identity_card_url"
          label={<CusttomInputLabel>Fotokopi KTP Saksi 1</CusttomInputLabel>}
          rules={[{ required: true, message: 'KTP saksi 1 diperlukan!' }]}
        >
          <CloudUpload
            name="witness_1_identity_card_url"
            form={form}
            multipleFile={false}
          />
        </Form.Item>
        <Form.Item
          name="witness_2_identity_card_url"
          label={<CusttomInputLabel>Fotokopi KTP Saksi 2</CusttomInputLabel>}
          rules={[{ required: true, message: 'KTP saksi 2 diperlukan!' }]}
        >
          <CloudUpload
            name="witness_2_identity_card_url"
            form={form}
            multipleFile={false}
          />
        </Form.Item>
        <Form.Item
          name="sptjm_url"
          label={
            <CusttomInputLabel>
              Surat Pernyataan Tanggung Jawab Mutlak (SPTJM) Kematian
            </CusttomInputLabel>
          }
          rules={[{ required: true, message: 'SPTJM diperlukan!' }]}
        >
          <CloudUpload name="sptjm_url" form={form} multipleFile={false} />
          <div className="flex items-center">
            <p className="mr-4 mt-2 text-xs font-semibold">
              SPTJM Kebenaran Kematian
            </p>
            <DownloadButton
              downloadUrl="https://utfs.io/f/afc02a25-e3c0-4a2c-af70-85ec62db79c6-vc9lgq.pdf"
              fileName="SPTJM Kebenaran Kematian"
            />
          </div>
        </Form.Item>
        <Form.Item
          name="statement_letter_of_true_death_data_url"
          label={
            <CusttomInputLabel>
              Surat Pernyataan Data Benar Kematian
            </CusttomInputLabel>
          }
          rules={[
            {
              required: true,
              message: 'Surat Pernyataan Data Benar Kematian diperlukan!',
            },
          ]}
        >
          <CloudUpload
            name="statement_letter_of_true_death_data_url"
            form={form}
            multipleFile={false}
          />
          <div className="flex items-center">
            <p className="mr-4 text-xs font-semibold">
              Surat Pernyataan Data Benar Kematian
            </p>
            <DownloadButton
              downloadUrl="https://utfs.io/f/a14d50ca-642c-42bb-90ab-bec29a6fdaef-dsevay.docx.pdf"
              fileName="Surat Pernyataan Data Benar Kematian"
            />
          </div>
        </Form.Item>
      </div>
    </div>
  );
};

export default DeathCertificateDataForm;
