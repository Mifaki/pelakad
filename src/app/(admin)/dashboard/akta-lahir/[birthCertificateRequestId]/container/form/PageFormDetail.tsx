'use client';

import { Form, type FormInstance, Input } from 'antd';
import React from 'react';
import DashboardImage from '~/shared/container/dashboard-image/DashboardImage';

type IDetailBirthCertificateForm = {
  form?: FormInstance<any>;
  id?: string;
};

const DetailBirthCertificateForm = ({ form }: IDetailBirthCertificateForm) => {
  return (
    <Form form={form} layout="vertical" className="flex flex-col gap-[20px]">
      <div className="flex w-full flex-col sm:flex-row sm:gap-4">
        <Form.Item className="my-[8px] w-full sm:w-1/2" name={'id'} label="ID">
          <Input readOnly />
        </Form.Item>
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name={'full_name'}
          label="Nama Pemohon"
        >
          <Input readOnly />
        </Form.Item>
      </div>
      <div className="flex w-full flex-col sm:flex-row sm:gap-4">
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name={'phone_number'}
          label="No. Handphone"
        >
          <Input readOnly />
        </Form.Item>
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name={'nik_id'}
          label="No. NIK"
        >
          <Input readOnly />
        </Form.Item>
      </div>
      <Form.Item className="my-[8px] w-full" name={'kk_id'} label="No. KK">
        <Input readOnly />
      </Form.Item>
      <Form.Item
        className="my-[8px] w-full sm:w-1/2"
        name={'father_identity_card_url'}
        label="KTP Ayah"
      >
        <DashboardImage src={form?.getFieldValue('father_identity_card_url')} />
      </Form.Item>
      <Form.Item
        className="my-[8px] w-full sm:w-1/2"
        name={'mother_identity_card_url'}
        label="KTP Ibu"
      >
        <DashboardImage src={form?.getFieldValue('mother_identity_card_url')} />
      </Form.Item>
      <Form.Item
        className="my-[8px] w-full sm:w-1/2"
        name={'out_of_wedlock_letter_url'}
        label="Surat Keterangan Luar Kawin"
      >
        <DashboardImage
          src={form?.getFieldValue('out_of_wedlock_letter_url')}
        />
      </Form.Item>
      <Form.Item
        className="my-[8px] w-full sm:w-1/2"
        name={'marriage_certificate_url'}
        label="Sertifikat Pernikahan"
      >
        <DashboardImage src={form?.getFieldValue('marriage_certificate_url')} />
      </Form.Item>
      <Form.Item
        className="my-[8px] w-full sm:w-1/2"
        name={'family_card_image'}
        label="Kartu Keluarga"
      >
        <DashboardImage src={form?.getFieldValue('family_card_image')} />
      </Form.Item>
      <Form.Item
        className="my-[8px] w-full sm:w-1/2"
        name={'marriage_book_url'}
        label="Buku Nikah"
      >
        <DashboardImage src={form?.getFieldValue('marriage_book_url')} />
      </Form.Item>
      <Form.Item
        className="my-[8px] w-full sm:w-1/2"
        name={'witness_1_identity_card_url'}
        label="KTP Saksi 1"
      >
        <DashboardImage
          src={form?.getFieldValue('witness_1_identity_card_url')}
        />
      </Form.Item>
      <Form.Item
        className="my-[8px] w-full sm:w-1/2"
        name={'witness_2_identity_card_url'}
        label="KTP Saksi 2"
      >
        <DashboardImage
          src={form?.getFieldValue('witness_2_identity_card_url')}
        />
      </Form.Item>
    </Form>
  );
};

export default DetailBirthCertificateForm;
