'use client';

import { Form, type FormInstance, Input } from 'antd';
import React from 'react';
import DashboardImage from '~/shared/container/dashboard-image/DashboardImage';

type IDetailDeathCertificateForm = {
  form?: FormInstance<any>;
  id?: string;
};

const DetailDeathCertificateForm = ({ form }: IDetailDeathCertificateForm) => {
  return (
    <Form form={form} layout="vertical" className="flex flex-col gap-[20px]">
      <div className="flex w-full flex-col sm:flex-row sm:gap-4">
        {form?.getFieldValue('id') && (
          <Form.Item className="my-[8px] w-full sm:w-1/2" name="id" label="ID">
            <Input readOnly />
          </Form.Item>
        )}
        {form?.getFieldValue('full_name') && (
          <Form.Item
            className="my-[8px] w-full sm:w-1/2"
            name="full_name"
            label="Nama Pemohon"
          >
            <Input readOnly />
          </Form.Item>
        )}
      </div>
      <div className="flex w-full flex-col sm:flex-row sm:gap-4">
        {form?.getFieldValue('phone_number') && (
          <Form.Item
            className="my-[8px] w-full sm:w-1/2"
            name="phone_number"
            label="No. Handphone"
          >
            <Input readOnly />
          </Form.Item>
        )}
        {form?.getFieldValue('nik_id') && (
          <Form.Item
            className="my-[8px] w-full sm:w-1/2"
            name="nik_id"
            label="No. NIK"
          >
            <Input readOnly />
          </Form.Item>
        )}
      </div>
      {form?.getFieldValue('kk_id') && (
        <Form.Item className="my-[8px] w-full" name="kk_id" label="No. KK">
          <Input readOnly />
        </Form.Item>
      )}
      {form?.getFieldValue('family_card_image') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="family_card_image"
          label="Kartu Keluarga"
        >
          <DashboardImage src={form.getFieldValue('family_card_image')} />
        </Form.Item>
      )}
      {form?.getFieldValue('reporter_identity_card_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="reporter_identity_card_url"
          label="KTP Pelapor"
        >
          <DashboardImage
            src={form.getFieldValue('reporter_identity_card_url')}
          />
        </Form.Item>
      )}
      {form?.getFieldValue('deceased_identity_card_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="deceased_identity_card_url"
          label="KTP Almarhum"
        >
          <DashboardImage
            src={form.getFieldValue('deceased_identity_card_url')}
          />
        </Form.Item>
      )}
      {form?.getFieldValue('death_certificate_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="death_certificate_url"
          label="Surat Keterangan Kematian"
        >
          <DashboardImage src={form.getFieldValue('death_certificate_url')} />
        </Form.Item>
      )}
      {form?.getFieldValue('witness_1_identity_card_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="witness_1_identity_card_url"
          label="KTP Saksi 1"
        >
          <DashboardImage
            src={form.getFieldValue('witness_1_identity_card_url')}
          />
        </Form.Item>
      )}
      {form?.getFieldValue('witness_2_identity_card_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="witness_2_identity_card_url"
          label="KTP Saksi 2"
        >
          <DashboardImage
            src={form.getFieldValue('witness_2_identity_card_url')}
          />
        </Form.Item>
      )}
      {form?.getFieldValue('sptjm_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="sptjm_url"
          label="SPTJM"
        >
          <DashboardImage src={form.getFieldValue('sptjm_url')} />
        </Form.Item>
      )}
      {form?.getFieldValue('statement_letter_of_true_death_data_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="statement_letter_of_true_death_data_url"
          label="Surat Pernyataan Kebenaran Data Kematian"
        >
          <DashboardImage
            src={form.getFieldValue('statement_letter_of_true_death_data_url')}
          />
        </Form.Item>
      )}
    </Form>
  );
};

export default DetailDeathCertificateForm;
