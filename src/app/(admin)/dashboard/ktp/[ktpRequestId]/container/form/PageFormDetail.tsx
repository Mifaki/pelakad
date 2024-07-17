'use client';

import { Form, type FormInstance, Input } from 'antd';
import React from 'react';

type IDetailKTPRequestForm = {
  form?: FormInstance<any>;
  onAccept?: any;
  onDecline?: any;
  id?: string;
};

const DetailKTPRequestForm = ({ form, onAccept }: IDetailKTPRequestForm) => {
  return (
    <Form form={form} layout="vertical" className="flex flex-col gap-[20px]">
      <div className="flex w-full flex-col sm:flex-row sm:gap-4">
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please select postal code!',
            },
          ]}
          className="my-[8px] w-full sm:w-1/2"
          name={'id'}
          label="ID"
        >
          <Input
            placeholder="Enter your detail here"
            className="custom-input h-[40px] w-full rounded-[8px] text-caption-1 font-[400]"
            readOnly
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please select postal code!',
            },
          ]}
          className="my-[8px] w-full sm:w-1/2"
          name={'full_name'}
          label="Nama Pemohon"
        >
          <Input
            placeholder="Enter your detail here"
            className="custom-input h-[40px] w-full rounded-[8px] text-caption-1 font-[400]"
            readOnly
          />
        </Form.Item>
      </div>
      <div className="flex w-full flex-col sm:flex-row sm:gap-4">
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please select postal code!',
            },
          ]}
          className="my-[8px] w-full sm:w-1/2"
          name={'phone_number'}
          label="No. Handphone"
        >
          <Input
            placeholder="Enter your detail here"
            className="custom-input h-[40px] w-full rounded-[8px] text-caption-1 font-[400]"
            readOnly
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please select postal code!',
            },
          ]}
          className="my-[8px] w-full sm:w-1/2"
          name={'nik_id'}
          label="No. NIK"
        >
          <Input
            placeholder="Enter your detail here"
            className="custom-input h-[40px] w-full rounded-[8px] text-caption-1 font-[400]"
            readOnly
          />
        </Form.Item>
      </div>
      <div className="flex w-full flex-col sm:flex-row sm:gap-4">
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please select postal code!',
            },
          ]}
          className="my-[8px] w-full sm:w-1/2"
          name={'kk_id'}
          label="No. KK"
        >
          <Input
            placeholder="Enter your detail here"
            className="custom-input h-[40px] w-full rounded-[8px] text-caption-1 font-[400]"
            readOnly
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please select postal code!',
            },
          ]}
          className="my-[8px] w-full sm:w-1/2"
          name={'reason'}
          label="Alasan Pengajuan"
        >
          <Input
            placeholder="Enter your detail here"
            className="custom-input h-[40px] w-full rounded-[8px] text-caption-1 font-[400] capitalize"
            readOnly
          />
        </Form.Item>
      </div>
    </Form>
  );
};

export default DetailKTPRequestForm;
