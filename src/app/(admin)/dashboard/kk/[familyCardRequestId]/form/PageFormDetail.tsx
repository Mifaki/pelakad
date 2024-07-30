'use client';

import { Form, type FormInstance, Input } from 'antd';
import React from 'react';
import DashboardImage from '~/shared/container/dashboard-image/DashboardImage';

type IDetailFamilyCardForm = {
  form?: FormInstance<any>;
  id?: string;
};

const DetailFamilyCardForm = ({ form }: IDetailFamilyCardForm) => {
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
      {form?.getFieldValue('reason') && (
        <Form.Item
          className="my-[8px] w-full"
          name="reason"
          label="Alasan Pengajuan"
        >
          <Input readOnly />
        </Form.Item>
      )}
      {form?.getFieldValue('new_card_reason') && (
        <Form.Item
          className="my-[8px] w-full"
          name="new_card_reason"
          label="Alasan Kartu Baru"
        >
          <Input readOnly />
        </Form.Item>
      )}
      {form?.getFieldValue('father_identity_card_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="father_identity_card_url"
          label="KTP Ayah"
        >
          <DashboardImage
            src={form.getFieldValue('father_identity_card_url')}
          />
        </Form.Item>
      )}
      {form?.getFieldValue('mother_identity_card_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="mother_identity_card_url"
          label="KTP Ibu"
        >
          <DashboardImage
            src={form.getFieldValue('mother_identity_card_url')}
          />
        </Form.Item>
      )}
      {form?.getFieldValue('husband_family_card_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="husband_family_card_url"
          label="Kartu Keluarga Suami"
        >
          <DashboardImage src={form.getFieldValue('husband_family_card_url')} />
        </Form.Item>
      )}
      {form?.getFieldValue('wife_family_card_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="wife_family_card_url"
          label="Kartu Keluarga Istri"
        >
          <DashboardImage src={form.getFieldValue('wife_family_card_url')} />
        </Form.Item>
      )}
      {form?.getFieldValue('husband_birth_certificate_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="husband_birth_certificate_url"
          label="Akta Kelahiran Suami"
        >
          <DashboardImage
            src={form.getFieldValue('husband_birth_certificate_url')}
          />
        </Form.Item>
      )}
      {form?.getFieldValue('wife_birth_certificate_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="wife_birth_certificate_url"
          label="Akta Kelahiran Istri"
        >
          <DashboardImage
            src={form.getFieldValue('wife_birth_certificate_url')}
          />
        </Form.Item>
      )}
      {form?.getFieldValue('old_family_card_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="old_family_card_url"
          label="Kartu Keluarga Lama"
        >
          <DashboardImage src={form.getFieldValue('old_family_card_url')} />
        </Form.Item>
      )}
      {form?.getFieldValue('element_change_statement_letter_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="element_change_statement_letter_url"
          label="Surat Pernyataan Perubahan Elemen"
        >
          <DashboardImage
            src={form.getFieldValue('element_change_statement_letter_url')}
          />
        </Form.Item>
      )}
      {form?.getFieldValue('broken_family_card_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="broken_family_card_url"
          label="Kartu Keluarga Rusak"
        >
          <DashboardImage src={form.getFieldValue('broken_family_card_url')} />
        </Form.Item>
      )}
      {form?.getFieldValue('original_family_card_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="original_family_card_url"
          label="Kartu Keluarga Asli"
        >
          <DashboardImage
            src={form.getFieldValue('original_family_card_url')}
          />
        </Form.Item>
      )}
      {form?.getFieldValue('police_loss_report_url') && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="police_loss_report_url"
          label="Laporan Kehilangan Polisi"
        >
          <DashboardImage src={form.getFieldValue('police_loss_report_url')} />
        </Form.Item>
      )}
      {form?.getFieldValue('marriage_book_url')?.length > 0 && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
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
      {form?.getFieldValue('supporting_document_url')?.length > 0 && (
        <Form.Item
          className="my-[8px] w-full sm:w-1/2"
          name="supporting_document_url"
          label="Dokumen Pendukung"
        >
          {form
            ?.getFieldValue('supporting_document_url')
            .map((url: string, index: number) => (
              <DashboardImage key={index} src={url} />
            ))}
        </Form.Item>
      )}
    </Form>
  );
};

export default DetailFamilyCardForm;
