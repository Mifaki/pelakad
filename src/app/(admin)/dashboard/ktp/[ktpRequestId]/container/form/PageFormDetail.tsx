'use client';

import { Form, type FormInstance, Input } from 'antd';
import React from 'react';
import DashboardImage from '~/shared/container/dashboard-image/DashboardImage';

type IDetailKTPRequestForm = {
  form?: FormInstance<any>;
  id?: string;
};

const DetailKTPRequestForm = ({ form }: IDetailKTPRequestForm) => {
  return (
    <Form form={form} layout="vertical" className="flex flex-col gap-[20px]">
      <div className="flex w-full flex-col sm:flex-row sm:gap-4">
        <Form.Item className="my-[8px] w-full sm:w-1/2" name="id" label="ID">
          <Input readOnly />
        </Form.Item>
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="full_name"
          label="Nama Pemohon"
        >
          <Input readOnly />
        </Form.Item>
      </div>
      <div className="flex w-full flex-col sm:flex-row sm:gap-4">
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="contact"
          label="No. Handphone"
        >
          <Input readOnly />
        </Form.Item>
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="nik_id"
          label="No. NIK"
        >
          <Input readOnly />
        </Form.Item>
      </div>
      <div className="flex w-full flex-col sm:flex-row sm:gap-4">
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="kk_id"
          label="No. KK"
        >
          <Input readOnly />
        </Form.Item>
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="reason"
          label="Alasan Pengajuan"
        >
          <Input readOnly />
        </Form.Item>
      </div>
      <Form.Item
        className="my-[8px] w-full"
        name="family_card_url"
        label="Kartu Keluarga"
      >
        <DashboardImage src={form?.getFieldValue('family_card_url')} />
      </Form.Item>
      <Form.Item
        className="my-[8px] w-full"
        name="birth_certificate_url"
        label="Akta Kelahiran"
      >
        <DashboardImage src={form?.getFieldValue('birth_certificate_url')} />
      </Form.Item>
      {form?.getFieldValue('foreign_move_cert_url') && (
        <Form.Item
          className="my-[8px] w-full"
          name="foreign_move_cert_url"
          label="Surat Keterangan Pindah Luar Negeri"
        >
          <DashboardImage src={form?.getFieldValue('foreign_move_cert_url')} />
        </Form.Item>
      )}
      {form?.getFieldValue('damaged_ktp_url') && (
        <Form.Item
          className="my-[8px] w-full"
          name="damaged_ktp_url"
          label="KTP Rusak"
        >
          <DashboardImage src={form?.getFieldValue('damaged_ktp_url')} />
        </Form.Item>
      )}
      {form?.getFieldValue('police_report_url') && (
        <Form.Item
          className="my-[8px] w-full"
          name="police_report_url"
          label="Laporan Kepolisian"
        >
          <DashboardImage src={form?.getFieldValue('police_report_url')} />
        </Form.Item>
      )}
      {form?.getFieldValue('marriage_book_url')?.length > 0 && (
        <Form.Item
          className="my-[8px] w-full"
          name="marriage_book_url"
          label="Buku Nikah"
        >
          {form
            ?.getFieldValue('marriage_book_url')
            .map((url: string, index: number) => (
              <DashboardImage key={index} src={url} />
            ))}
        </Form.Item>
      )}
    </Form>
  );
};

export default DetailKTPRequestForm;
