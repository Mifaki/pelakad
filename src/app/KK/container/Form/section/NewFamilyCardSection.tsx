import React from 'react';
import { Form, type FormInstance } from 'antd';
import CloudUpload from '~/shared/container/cloud-upload/CloudUpload';
import CustomInputLabel from '~/shared/container/custom-input-label/CustomInputLabel';

const NewFamilyCardSection = ({ form }: { form: FormInstance<any> }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Form.Item
        name="husband_family_card_url"
        label={<CustomInputLabel>Kartu Keluarga Laki-Laki</CustomInputLabel>}
        rules={[
          { required: true, message: 'Kartu Keluarga Laki-Laki diperlukan!' },
        ]}
        className="mb-4"
      >
        <div className="w-full">
          <CloudUpload
            name="husband_family_card_url"
            form={form}
            multipleFile={false}
          />
        </div>
      </Form.Item>

      <Form.Item
        name="wife_family_card_url"
        label={<CustomInputLabel>Kartu Keluarga Wanita</CustomInputLabel>}
        rules={[
          { required: true, message: 'Kartu Keluarga Wanita diperlukan!' },
        ]}
        className="mb-4"
      >
        <CloudUpload
          name="wife_family_card_url"
          form={form}
          multipleFile={false}
        />
      </Form.Item>

      <Form.Item
        name="father_identity_card_url"
        label={<CustomInputLabel>KTP Ayah</CustomInputLabel>}
        rules={[{ required: true, message: 'KTP Ayah diperlukan!' }]}
        className="mb-4"
      >
        <CloudUpload
          name="father_identity_card_url"
          form={form}
          multipleFile={false}
        />
      </Form.Item>

      <Form.Item
        name="mother_identity_card_url"
        label={<CustomInputLabel>KTP Ibu</CustomInputLabel>}
        rules={[{ required: true, message: 'KTP Ibu diperlukan!' }]}
        className="mb-4"
      >
        <CloudUpload
          name="mother_identity_card_url"
          form={form}
          multipleFile={false}
        />
      </Form.Item>

      <Form.Item
        name="husband_birth_certificate_url"
        label={<CustomInputLabel>Akta Kelahiran Laki-Laki</CustomInputLabel>}
        rules={[
          { required: true, message: 'Akta Kelahiran Laki-Laki diperlukan!' },
        ]}
        className="mb-4"
      >
        <CloudUpload
          name="husband_birth_certificate_url"
          form={form}
          multipleFile={false}
        />
        <p className="mt-2 text-xs font-medium">
          *Surat perubahan data wajib di sertakan Jika melakukan Perubahan data
          pada KK
        </p>
      </Form.Item>

      <Form.Item
        name="wife_birth_certificate_url"
        label={<CustomInputLabel>Akta Kelahiran Wanita</CustomInputLabel>}
        rules={[
          { required: true, message: 'Akta Kelahiran Wanita diperlukan!' },
        ]}
        className="mb-4"
      >
        <CloudUpload
          name="wife_birth_certificate_url"
          form={form}
          multipleFile={false}
        />
        <p className="mt-2 text-xs font-medium">
          *Surat perubahan data wajib di sertakan Jika melakukan Perubahan data
          pada KK
        </p>
      </Form.Item>

      <Form.Item
        name="marriage_book_url"
        label={
          <CustomInputLabel>
            Buku nikah / kutipan akta perkawinan
          </CustomInputLabel>
        }
        rules={[
          {
            required: true,
            message: 'Buku nikah / kutipan akta perkawinan diperlukan!',
          },
        ]}
        className="mb-4 md:col-span-2"
      >
        <CloudUpload name="marriage_book_url" form={form} />
        <p className="mt-2 text-xs font-medium">
          *Surat perubahan data wajib di sertakan Jika melakukan Perubahan data
          pada KK
        </p>
      </Form.Item>
    </div>
  );
};

export default NewFamilyCardSection;
